using CustomerService.Library.Models;
using CustomerService.Library.Templates;
using CustomerService.Service.Interface;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Service
{
    public class AzureStorageService : IAzureStorageService
    {
        public async Task<ActionResultModel> UploadToAzureStorage(string connectionString, string containerName, string fileName, Stream srcStream)
        {
            ActionResultModel resultModel = new ActionResultModel(ActionStatus.Success);

            try
            {
                //  Create Azure Storage
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);

                //  Create a blob client.
                CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

                //  Create a container 
                CloudBlobContainer container = blobClient.GetContainerReference(containerName);

                if (await container.CreateIfNotExistsAsync())
                {
                    await container.SetPermissionsAsync(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Blob });
                }

                //  Create a block blob
                CloudBlockBlob blockBlob = container.GetBlockBlobReference(fileName);

                // Do upload
                await blockBlob.UploadFromStreamAsync(srcStream);

                resultModel.ResultMessage = string.Format(KnowledgeBaseTemplate.KNOWLEDGE_BASE_FILE_URI_FOR_UPLOAD, fileName);
            }
            catch(Exception ex)
            {
                resultModel.ResultStatus = ActionStatus.Failed;
                resultModel.ResultMessage = ex.Message;
            }
                

            return resultModel;
        }
    }
}
