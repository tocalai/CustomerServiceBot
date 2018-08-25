using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Models
{
    public class KnowledgebaseDetailModel
    {
        public string Id { get; set; }
        public string HostName { get; set; }
        public DateTime LastAccessedTimestamp { get; set; }
        public DateTime LastChangedTimestamp { get; set; }
        public DateTime LastPublishedTimestamp { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public List<string> Urls { get; set; }
        public List<string> Sources { get; set; }
    }
}
