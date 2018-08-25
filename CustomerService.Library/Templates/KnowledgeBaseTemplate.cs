using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Templates
{
    public class KnowledgeBaseTemplate
    {
        #region export
        public const string EXPORT_HEADER = "Question\tAnswer\tSource\tMetadata";
        public const string EXPORT_CONTENT = "{0}\t{1}\t{2}\t{3}";
        #endregion

        #region update
        public const string UPDATE_JSON_FORMAT = @"
        {{
           ""add"": {{
           ""qnaList"": [],
           ""urls"": [],
           ""files"": [{0}]
           }},
           ""update"": {{
             ""name"": {1}
           }},
           ""delete"": {{
             ""sources"":[{2}]
           }}
        }}
        ";

        public const string UPDATE_FILE_JSON_FORMAT = @"
        {{
           ""fileName"": {0},
           ""fileUri"": {1}
        }}
        ";
        #endregion

        #region template sample for download
        public const string DOWNLOAD_SAMPLE_CONTENTS = @"
        [{""Id"":0,""Question"":""I need help..."",""Answer"":""Email us...or call this number..."",""Source"":""SampleFAQ.tsv"",""Metadata"":null},
         {""Id"":0,""Question"":""My device not work..."",""Answer"":""Please contract to customer support..."",""Source"":""SampleFAQ.tsv"",""Metadata"":null},
         {""Id"":0,""Question"":""Where can I found user manual..."",""Answer"":""Please download it through below link..."",""Source"":""SampleFAQ.tsv"",""Metadata"":null}]
        ";

        #endregion

        #region azure storgae
        public const string KNOWLEDGE_BASE_FILE_URI_FOR_UPLOAD = "https://tocalai.blob.core.windows.net/konwledgebase/{0}";
        #endregion
    }
}
