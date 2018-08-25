using CustomerService.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CustomerService.Service.Interface
{
    public interface IKnowledgeBaseService
    {
        // Get knowledge base detail
        Task<KnowledgebaseDetailModel> GetKnowledgebaseDetail(string key, string knowledgeBaseId);

        // Download knowledge base (all available)
        Task<KnowledgeBaseContentsModel> DownloadKnowledgeBaseContents(string key, string knowledgeBaseId, string env);

        // Download knowledge base accroding source
        Task<string> DownloadKnowledgeBaseContents(string key, string knowledgeBaseId, string env, List<string> sources);

        // Import TSV to knowledge base
        Task<ActionResultModel> ImportKnowledgeBase(string key, string knowledgeBaseId, string srcFile, string srcPath);

        // Publish knowledge base to azure
        Task<ActionResultModel> PublishKnowledgeBase(string key, string knowledgeBaseId);

        // Delete knowledge base from QnA maker
        Task<ActionResultModel> DeleteKnowledgeBase(string key, string knowledgeBaseId, List<string> sources);

    }
}
