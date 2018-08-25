using CustomerService.Library.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace CustomerService.Service.Interface
{
    public interface IAzureStorageService
    {
        Task<ActionResultModel> UploadToAzureStorage(string connectionString, string containerName, string fileName, Stream srcStream);
    }
}
