using System;
using System.Collections.Generic;
using System.Text;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Library.Models
{
    public class ActionResultModel
    {
        public ActionStatus ResultStatus { get; set; }
        public string ResultMessage { get; set; }

        public ActionResultModel()
        {
            ResultStatus = ActionStatus.Unknown;
            ResultMessage = string.Empty;
        }

        public ActionResultModel(ActionStatus status)
        {
            ResultStatus = status;
        }
        
        public ActionResultModel(ActionStatus status, string message)
        {
            ResultStatus = status;
            ResultMessage = message;
        }
    }
}
