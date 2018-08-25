using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Configuration
{
    public class Settings
    {
        public BotServiceVO BotService { get; set; }
        public QnAMakerVO QnAMaker { get; set; }
        public AzureStorageVO AzureStorage { get; set; }
        public OktaVO Okta { get; set; }
        

        public class BotServiceVO
        {
            public string MicrosoftAppId { get; set; }
            public string MicrosoftAppPassword { get; set; }
            public string DirectLineSecret { get; set; }
        }

        public class QnAMakerVO
        {
            public string Host { get; set; }
            public string KnowledgeBaseId { get; set; }
            public string EndpointKey { get; set; }
            public string SubscriptionKey { get; set; }
        }

        public class AzureStorageVO
        {
            public string ConnectionString { get; set; }
            public string ContainerName { get; set; }
        }

        public class OktaVO
        {
            public string Issuer { get; set; }
            public string ClientId { get; set; }
            public string ClientSecret { get; set; }
        }
    }
}
