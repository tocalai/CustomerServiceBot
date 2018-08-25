using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using CustomerService.Library;
using CustomerService.Library.Configuration;
using CustomerService.Library.Enums;
using CustomerService.Library.Extensions;
using CustomerService.Library.Models;
using CustomerService.Library.Templates;
using CustomerService.Service.Interface;
using CustomerService.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Web.Controllers
{
    [Authorize]
    public class AdminController : Controller
    {
        private readonly IKnowledgeBaseService _knowledgeBaseService;
        private readonly IAzureStorageService _storageService;

        private readonly Settings _settings;

        private  IMemoryCache _memoryCache;

        private IHostingEnvironment _hostingEvn;

        public AdminController(IKnowledgeBaseService knowledgeBaseService, IAzureStorageService storageService, IOptions<Settings> settings, IMemoryCache memoryCache, IHostingEnvironment hostingEnv)
        {
            _knowledgeBaseService = knowledgeBaseService;
            _storageService = storageService;
            _settings = settings.Value;
            _memoryCache = memoryCache;
            _hostingEvn = hostingEnv;
        }

        public async Task<IActionResult> Index()
        {
            ViewData[Constants.VIEW_DATA_PAGE_KEY] = Constants.VIEW_DATA_PAGE_ADIM_VALUE;

            // Retrieve knowledge base overview
            var srcDocs = await GetKnowledgeBaseSources();
            if(srcDocs == null)
            {
                return RedirectToAction("Error", "Home", new { message = "Retrieved knowledge based overview failed"});
            }

            KnowledgeBaseViewModel viewModel = new KnowledgeBaseViewModel();
            viewModel.SourceDocs.AddRange(srcDocs);

            var faqs = await GetKnowledgeBaseContents(false);

            if (faqs == null)
            {
                return RedirectToAction("Error", "Home", new { message = "Retrieved knowledge based contents failed" });
            }

            var filterFAQs = faqs.Where(e => e.Source == srcDocs.ElementAt(0));
            viewModel.FAQEntries.AddRange(filterFAQs);

            return View(viewModel);
        }

        [HttpPost]
        public async Task<IActionResult> CreateKnowledgeBaseFile(string source)
        {
            IEnumerable<FAQEntry> entries = null ;
            if(!string.IsNullOrEmpty(source))
            {
                // Get source from cache or remote server
                var faqs = await GetKnowledgeBaseContents(false);
                entries = faqs.Where(e => e.Source == source);
            }
            else
            {
                // Get the source from template sample
                entries = JsonConvert.DeserializeObject<IEnumerable<FAQEntry>>(KnowledgeBaseTemplate.DOWNLOAD_SAMPLE_CONTENTS);
            }

            var contents = CreateFAQTsvContents(entries);
            var bytes = new UTF8Encoding().GetBytes(contents);

            var fileKey = Guid.NewGuid().ToString();
            TempData[fileKey] = bytes;

            return Json(new { FileHandle = fileKey, FileName = source ?? Constants.KNOWLEDGE_BASE_SAMPLE_FILE_NAME });
        } 

        [HttpGet]
        public IActionResult DownloadKnowledgeBaseFile(string fileKey, string source)
        {
            if(TempData[fileKey] != null)
            {
                var contentType = "text/tsv";
                var bytes = TempData[fileKey] as byte[];

                return File(bytes, contentType, source);
            }

            return new EmptyResult();
        }

        [HttpPost]
        public async Task<JsonResult> FindFAQEntries(string source)
        {
            var faqs = await GetKnowledgeBaseContents(false);
            var entries = faqs.Where(e => e.Source == source);
            return entries.Count() > 0 ? Json(entries) : Json(null);
        }

        public async Task<JsonResult> GetFAQSources()
        {
            var srcs = await GetKnowledgeBaseSources();
            return srcs.Count() > 0 ? Json(srcs) : Json(null);
        }

        private string CreateFAQTsvContents(IEnumerable<FAQEntry> entries)
        {
            StringBuilder builder = new StringBuilder();
            builder.AppendLine(KnowledgeBaseTemplate.EXPORT_HEADER);

            foreach (var entry in entries)
            {
                // Note: not used the metadata for the version
                var line = string.Format(KnowledgeBaseTemplate.EXPORT_CONTENT, entry.Question, entry.Answer, entry.Source, string.Empty);
                builder.AppendLine(line);
            }

            return builder.ToString();
        }

        private async Task<IEnumerable<string>> GetKnowledgeBaseSources()
        {
            var srcs = _memoryCache.Get<IEnumerable<string>>(Constants.KNOWLEDGE_BASE_SOURCES_CACHE_KEY);
            if(srcs != null)
            {
                return srcs;
            }

            var detailMode = await _knowledgeBaseService.GetKnowledgebaseDetail(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId);

            if(detailMode != null)
            {
                MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                {
                    Priority = CacheItemPriority.NeverRemove
                };
                _memoryCache.Set(Constants.KNOWLEDGE_BASE_SOURCES_CACHE_KEY, detailMode.Sources, options);
            }

            return detailMode?.Sources;
        }

        private async Task<IEnumerable<FAQEntry>> GetKnowledgeBaseContents(bool forceDownload)
        {
            IEnumerable<FAQEntry> faqs = _memoryCache.Get<IEnumerable<FAQEntry>>(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY);

            // Not in cache or force to renew
            if (faqs == null || forceDownload)
            {
                // Retrieve knoledge base contents from reomte server
                var contentsModel = await _knowledgeBaseService.DownloadKnowledgeBaseContents(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId, KnowledgeBaseEnum.Environment.Test.GetStringValue());
                if (contentsModel == null)
                {
                    return null;
                }

                faqs = contentsModel.QnaDocuments.SelectMany(c => c.Questions, (c, ques) => new FAQEntry { Id = c.Id, Answer = c.Answer, Question = ques, Source = c.Source });
                MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                {
                    Priority = CacheItemPriority.NeverRemove
                };
                _memoryCache.Set(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY, faqs, options);
            }

            return faqs;
        }

        public async Task<IActionResult> DeleteKnowledgeBaseFromSrc(string source)
        {
            var resultModel = await _knowledgeBaseService.DeleteKnowledgeBase(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId, new List<string> { source });

            if (resultModel.ResultStatus == ActionStatus.Success)
            {
                await GetKnowledgeBaseContents(true);
            }

            return Json(new { ResultMessge = resultModel.ResultMessage,  resultModel.ResultStatus });
        }

        public async Task<IActionResult> UpdateKnowledgeBaseFromSrc()
        {
            var resultModel = new ActionResultModel(ActionStatus.Success, "Uplod completed");

            try
            {
                var fromFile = Request.Form.Files[0];

                if (fromFile == null || fromFile.Length == 0)
                {
                    resultModel.ResultStatus = ActionStatus.Failed;
                    resultModel.ResultMessage = "Upload file without content";
                    return Json(new { resultModel.ResultMessage, resultModel.ResultStatus });
                }

                // Write file to server
                var fileName = Guid.NewGuid().ToString() + "-" + fromFile.FileName;
                var path = Path.Combine($@"{_hostingEvn.WebRootPath}\kb-files", fileName);

                // Check file extension
                var extension = Path.GetExtension(path);
                if(string.Compare(extension.ToLower(), ".tsv") != 0)
                {
                    resultModel.ResultStatus = ActionStatus.Failed;
                    resultModel.ResultMessage = "Upload file format not support";
                    return Json(new {  resultModel.ResultMessage, resultModel.ResultStatus });
                }

#if DEBUG
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await fromFile.CopyToAsync(stream);
                }
#endif
                
                // Upload file to azure storage
                resultModel = await _storageService.UploadToAzureStorage(_settings.AzureStorage.ConnectionString, _settings.AzureStorage.ContainerName, fileName, fromFile.OpenReadStream());
                if(resultModel.ResultStatus == ActionStatus.Failed)
                {
                    resultModel.ResultMessage = $"Upload file: {fromFile.FileName} to server failed";
                    return Json(new { ResultMessge = resultModel.ResultMessage, resultModel.ResultStatus });
                }

                // Import src file to knowledge base server
                resultModel = await _knowledgeBaseService.ImportKnowledgeBase(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId, fromFile.FileName, resultModel.ResultMessage);

                if (resultModel.ResultStatus == ActionStatus.Failed)
                { 
                    return Json(new { ResultMessge = resultModel.ResultMessage, resultModel.ResultStatus });
                }

                // Traning knowledge base and publish
                resultModel = await _knowledgeBaseService.PublishKnowledgeBase(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId);
                
                // Inseret or update caches
                InsertOrUpdateCaches(fromFile.FileName, fromFile.OpenReadStream());

                return Json(new { ResultMessge = resultModel.ResultMessage, resultModel.ResultStatus });
            }
            catch(Exception ex)
            {
                resultModel.ResultStatus = ActionStatus.Failed;
                resultModel.ResultMessage = ex.Message;
                return Json(new { resultModel.ResultMessage, resultModel.ResultStatus });
            }
        }

        private byte[] ConvertStreamToBytes(Stream inStream)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                inStream.CopyTo(ms);
                return ms.ToArray();
            }
        }

        private Dictionary<string, int> ParserHeader(string[] header)
        {
            Dictionary<string, int> headerDic = new Dictionary<string, int>();
            for (var idx = 0; idx < header.Length; idx++)
            {
                headerDic.Add(header[idx].ToUpper(), idx);
            }

            return headerDic;
        }

        private IEnumerable<FAQEntry> CreateFAQEntriesFromFile(string linesInFile)
        {
            var faqs = new List<FAQEntry>();
            var lines = from line in linesInFile.Split(Environment.NewLine.ToCharArray(), StringSplitOptions.RemoveEmptyEntries)
                        select line.Split('\t').ToArray();
            // parser header
            var headerDic = ParserHeader(lines.ElementAt(0));
            foreach (var line in lines.Skip(1))
            {
                FAQEntry entry = new FAQEntry()
                {
                    Question = line[headerDic[nameof(FAQEntry.Question).ToUpper()]],
                    Answer = line[headerDic[nameof(FAQEntry.Answer).ToUpper()]],
                    Source = line[headerDic[nameof(FAQEntry.Source).ToUpper()]],
                    Metadata = line[headerDic[nameof(FAQEntry.Metadata).ToUpper()]]
                };

                faqs.Add(entry);
            }

            return faqs;
        }

        private void InsertOrUpdateCaches(string srcName, Stream srcStream)
        {
            // Get FAQ sources list from cache
            if (_memoryCache.TryGetValue(Constants.KNOWLEDGE_BASE_SOURCES_CACHE_KEY, out IEnumerable<string> srcs))
            {
                var src = srcs.Where(s => s.CompareTo(srcName) == 0).FirstOrDefault();
                if (string.IsNullOrEmpty(src))
                {
                    // Not in cache, insert into
                    var srcList = srcs.ToList();
                    srcList.Add(srcName);
                    srcList.OrderBy(s => s);
                    MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                    {
                        Priority = CacheItemPriority.NeverRemove
                    };
                    _memoryCache.Set(Constants.KNOWLEDGE_BASE_SOURCES_CACHE_KEY, srcList, options);
                }
            }

            // Get FAQ contents list from cache
            if (_memoryCache.TryGetValue(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY, out IEnumerable<FAQEntry> faqs))
            {
                var excludFQAS = faqs.ToList().Where(e => e.Source.CompareTo(srcName) != 0);
                var bytes = ConvertStreamToBytes(srcStream);
                var linesInFiles = Encoding.UTF8.GetString(bytes);
                var newEntries = CreateFAQEntriesFromFile(linesInFiles);
                var newFAQs = excludFQAS.Concat(newEntries);
                MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                {
                    Priority = CacheItemPriority.NeverRemove
                };
                _memoryCache.Set(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY, newFAQs, options);

            }
        }
    }
}