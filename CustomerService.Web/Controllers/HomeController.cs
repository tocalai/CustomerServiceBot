using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CustomerService.Web.Models;
using CustomerService.Service.Interface;
using CustomerService.Library.Configuration;
using Microsoft.Extensions.Options;
using CustomerService.Library;
using Microsoft.Extensions.Caching.Memory;
using CustomerService.Library.Enums;
using CustomerService.Library.Extensions;


namespace CustomerService.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IKnowledgeBaseService _knowledgeBaseService;

        private readonly Settings _settings;

        private IMemoryCache _memoryCache;

        public HomeController(IKnowledgeBaseService knowledgeBaseService, IOptions<Settings> settings, IMemoryCache memoryCache)
        {
            _knowledgeBaseService = knowledgeBaseService;
            _settings = settings.Value;
            _memoryCache = memoryCache;
        }

        public IActionResult Index()
        {
            ViewData[Constants.VIEW_DATA_WEB_CHAT_SECRET_KEY] = _settings.BotService.DirectLineSecret;
            ViewData[Constants.VIEW_DATA_PAGE_KEY] = string.Empty;

            Task preGetTask = new Task(async() => {
                Debug.WriteLine($"{DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}->%Before PreGetknowledgeBaseContetns called%");
                await PreGetknowledgeBaseContetns();
                Debug.WriteLine($"{DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}->%After PreGetknowledgeBaseContetns called%");
            });
            preGetTask.Start();
            

            return View();
        }

        private async Task PreGetknowledgeBaseContetns()
        {
            IEnumerable<FAQEntry> faqs = _memoryCache.Get<IEnumerable<FAQEntry>>(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY);

            if (faqs == null)
            {
                // Retrieve knoledge base contents
                var contentsModel = await _knowledgeBaseService.DownloadKnowledgeBaseContents(_settings.QnAMaker.SubscriptionKey, _settings.QnAMaker.KnowledgeBaseId, KnowledgeBaseEnum.Environment.Test.GetStringValue());
                faqs = contentsModel.QnaDocuments.SelectMany(c => c.Questions, (c, ques) => new FAQEntry { Id = c.Id, Answer = c.Answer, Question = ques, Source = c.Source });
                MemoryCacheEntryOptions options = new MemoryCacheEntryOptions
                {
                    Priority = CacheItemPriority.NeverRemove
                };
                _memoryCache.Set(Constants.KNOWLEDGE_BASE_CONTENTS_CACHE_KEY, faqs, options);
                Debug.WriteLine($"{DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")}->%PreGetknowledgeBaseContetns completed%");
            }
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult Error(string message)
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier, Message = message });
        }
    }
}
