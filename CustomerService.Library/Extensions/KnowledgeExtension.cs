using CustomerService.Library.Attributes;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace CustomerService.Library.Extensions
{
    public static class KnowledgeExtension
    {
        public static string GetStringValue(this Enum value)
        {
            // Get the type
            Type type = value.GetType();

            // Get fieldinfo for this type
            FieldInfo fieldInfo = type.GetField(value.ToString());

            // Get the stringvalue attributes
            StringValueAttribute[] attribs = fieldInfo.GetCustomAttributes(
                typeof(StringValueAttribute), false) as StringValueAttribute[];

            // Return the first if there was a match.
            return attribs.Length > 0 ? attribs[0].StringValue : null;
        }

        public static string AddDoubleQuotes(this string str)
        {
            return "\"" + str + "\"";
        }
    }
}
