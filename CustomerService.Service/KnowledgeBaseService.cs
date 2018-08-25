using CustomerService.Library;
using CustomerService.Library.Extensions;
using CustomerService.Library.Models;
using CustomerService.Library.Templates;
using CustomerService.Service.Interface;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Service
{
    public class KnowledgeBaseService : IKnowledgeBaseService
    {
        public async Task<ActionResultModel> DeleteKnowledgeBase(string key, string knowledgeBaseId, List<string> sources)
        {
            ActionResultModel result = new ActionResultModel();
            var uri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + Constants.QNA_METHOD + knowledgeBaseId;

            try
            {
                var filesSrc = string.Join(',', sources.Select(s => s.AddDoubleQuotes()));

                // Patch delete existed source
                var deletePatchJsonFormat = string.Format(KnowledgeBaseTemplate.UPDATE_JSON_FORMAT, string.Empty, Constants.KNOWLEDGE_BASE_NAME.AddDoubleQuotes(), filesSrc);
                result = await KnowledgeBaseManger.Instance.UpdateKonwledgeBase(key, uri, deletePatchJsonFormat);

                if (result.ResultStatus != ActionStatus.Success)
                {
                    result.ResultMessage = "Patch [delete] failed: " + result.ResultMessage;
                    return result;
                }
            }
            catch(Exception ex)
            {
                result.ResultMessage = $"Patch [delete] failed, message: {ex.Message}";
            }
            return result;
        }

        public async Task<string> DownloadKnowledgeBaseContents(string key, string knowledgeBaseId, string env, List<string> sources)
        {
            StringBuilder builder = new StringBuilder();
            builder.AppendLine(KnowledgeBaseTemplate.EXPORT_HEADER);

            try
            {
                var knowledgeBaseContents = await this.DownloadKnowledgeBaseContents(key, knowledgeBaseId, env);

                if (knowledgeBaseContents == null)
                {
                    return string.Empty;
                }

                var filterContents = knowledgeBaseContents.QnaDocuments.Where(doc => sources.Any(src => doc.Source == src)).ToList();

                var targets = filterContents.SelectMany(c => c.Questions, (c, ques) => new { Id = c.Id, Ans = c.Answer, Ques = ques, Src = c.Source }).ToList();

                foreach (var target in targets)
                {
                    // Note: not used the metadata for the version
                    var line = string.Format(KnowledgeBaseTemplate.EXPORT_CONTENT, target.Ques, target.Ans, target.Src, string.Empty);
                    builder.AppendLine(line);
                }
            }
            catch(Exception)
            {
                throw;
            }

            return builder.ToString();
        }

        public async Task<KnowledgeBaseContentsModel> DownloadKnowledgeBaseContents(string key, string knowledgeBaseId, string env)
        {
            var uri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + string.Format(Constants.QNA_METHOD_GET_CONTENTS, knowledgeBaseId, env);
            var response = await KnowledgeBaseManger.Instance.Get(uri, key);

            try
            {

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }
            }
            catch (Exception)
            {
                throw;
            }

            return JsonConvert.DeserializeObject<KnowledgeBaseContentsModel>(await response.Content.ReadAsStringAsync());
        }

        public async Task<KnowledgebaseDetailModel> GetKnowledgebaseDetail(string key, string knowledgeBaseId)
        {            
            var uri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + Constants.QNA_METHOD + knowledgeBaseId;

            try
            {
                var response = await KnowledgeBaseManger.Instance.Get(uri, key);

                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var knowledgeBaseDetail = JsonConvert.DeserializeObject<KnowledgebaseDetailModel>(await response.Content.ReadAsStringAsync());
                return knowledgeBaseDetail;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        public async Task<ActionResultModel> ImportKnowledgeBase(string key, string knowledgeBaseId, string srcFile, string srcPath)
        {
            ActionResultModel result = new ActionResultModel();
            var uri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + Constants.QNA_METHOD + knowledgeBaseId;

            try
            {
                var details = await GetKnowledgebaseDetail(key, knowledgeBaseId);
                var target = details.Sources.Where(s => s == srcFile).FirstOrDefault();

                if(!string.IsNullOrEmpty(target))
                {
                    // existed in current database, delete first
                    // Patch delete existed source
                    var deletePatchJsonFormat = string.Format(KnowledgeBaseTemplate.UPDATE_JSON_FORMAT, string.Empty, Constants.KNOWLEDGE_BASE_NAME.AddDoubleQuotes(), srcFile.AddDoubleQuotes());
                    result = await KnowledgeBaseManger.Instance.UpdateKonwledgeBase(key, uri, deletePatchJsonFormat);

                    if (result.ResultStatus != ActionStatus.Success)
                    {
                        result.ResultMessage = "Patch [delete] failed: " + result.ResultMessage;
                        return result;
                    }
                }

                // Patch add target source to knowledge base
                var fileJsonFormat = string.Format(KnowledgeBaseTemplate.UPDATE_FILE_JSON_FORMAT, srcFile.AddDoubleQuotes(), srcPath.AddDoubleQuotes());
                var addPatchJsonFormat = string.Format(KnowledgeBaseTemplate.UPDATE_JSON_FORMAT, fileJsonFormat, Constants.KNOWLEDGE_BASE_NAME.AddDoubleQuotes(), string.Empty);
                result = await KnowledgeBaseManger.Instance.UpdateKonwledgeBase(key, uri, addPatchJsonFormat);

                if (result.ResultStatus != ActionStatus.Success)
                {
                    result.ResultMessage = "Patch [add] failed: " + result.ResultMessage;
                }
            }
            catch(Exception ex)
            {
                result.ResultMessage = $"Patch failed, message: {ex.Message}";
            }
            return result;
        }

        public async Task<ActionResultModel> PublishKnowledgeBase(string key, string knowledgeBaseId)
        {
            var uri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + Constants.QNA_METHOD + knowledgeBaseId;

            try
            {
                var response = await KnowledgeBaseManger.Instance.Post(uri, key);

                if (!response.IsSuccessStatusCode)
                {
                    return new ActionResultModel(ActionStatus.Failed, "Publish failed");
                }
            }
            catch(Exception ex)
            {
                return new ActionResultModel(ActionStatus.Failed, $"Publish failed, message: {ex.Message}");
            }

            return new ActionResultModel(ActionStatus.Success);

        }
    }
}
