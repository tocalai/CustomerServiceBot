using System;
using System.Collections.Generic;
using System.Text;

namespace CustomerService.Library.Attributes
{
    public class StringValueAttribute : Attribute
    {
        public StringValueAttribute(string value)
        {
            this.StringValue = value;
        }
        public string StringValue { get; protected set; }
    }
}
