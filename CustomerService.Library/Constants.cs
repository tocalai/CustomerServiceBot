using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library
{
    public class Constants
    {
        #region knowledge bases
        public const string CONITIVE_HOST = "https://westus.api.cognitive.microsoft.com";
        public const string QNA_SERVICE = "/qnamaker/v4.0";
        public const string QNA_METHOD = "/knowledgebases/";
        public const string QNA_METHOD_GET_CONTENTS = "/knowledgebases/{0}/{1}/qna/";
        public const string QNA_SUBSCRIPTION_KEY_HEADER = "Ocp-Apim-Subscription-Key";
        public const string KNOWLEDGE_BASE_NAME = "CustomerServiceDemo";
        public const string OPERATION_STATE = "operationState";
        public const string RESPONSE_HEADER_LOCATION = "Location";
        public const string RESPONSE_HEADER_RETRY_AFTER = "Retry-After";
        #endregion

        #region web site
        public const string VIEW_DATA_TITLE_KEY = "Title";
        public const string VIEW_DATA_WEB_CHAT_SECRET_KEY = "Secret";
        public const string VIEW_DATA_PAGE_KEY = "Page";
        public const string VIEW_DATA_PAGE_ADIM_VALUE = "Admin";
        public const int FAQ_TOP_PREVIEW_RECORDS = 3;
        public const string KNOWLEDGE_BASE_CONTENTS_CACHE_KEY = "Contents";
        public const string KNOWLEDGE_BASE_SOURCES_CACHE_KEY = "Sources";
        public const string KNOWLEDGE_BASE_SAMPLE_FILE_NAME = "SampleFAQ.tsv";
        #endregion

      
    }
}
