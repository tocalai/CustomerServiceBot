using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Models
{
    public class KnowledgeBaseContentsModel
    {
        public List<Content> QnaDocuments { get; set; }

        public class Content
        {
            public int Id { get; set; }
            public string Answer { get; set; }
            public string Source { get; set; }
            public List<string> Questions { get; set; }
            public List<MetaDataVO> Metadata { get; set; }
        }

        public class MetaDataVO
        {
            public string Name { get; set; }
            public string Value { get; set; }
        }
    }
}
