using CustomerService.Library.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Enums
{
    public class KnowledgeBaseEnum
    {
        public enum Environment
        {
            [StringValue("test")]
            Test = 0,
            [StringValue("prod")]
            Prod = 1
        }

        public enum OperationState
        {
            [StringValue("NotStarted")]
            NotStarted = 0,
            [StringValue("Running")]
            Running = 1
        }
    }
}
