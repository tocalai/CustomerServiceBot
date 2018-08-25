using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerService.Web.Models
{
    public class KnowledgeBaseViewModel
    {
        public List<string> SourceDocs { get; set; }
        public List<FAQEntry> FAQEntries { get; set; }

        public KnowledgeBaseViewModel()
        {
            SourceDocs = new List<string>();
            FAQEntries = new List<FAQEntry>();
        }
    }

    public class FAQEntry
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public string Source { get; set; }
        public string Metadata { get; set; }
    }
}
