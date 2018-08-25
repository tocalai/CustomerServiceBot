using CustomerService.Library.Extensions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using static CustomerService.Library.Enums.KnowledgeBaseEnum;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Service.UnitTest
{
    [TestClass]
    public class ServiceTest
    {
        const string subKey = "{Your key}";
        const string knowledgeBaseId = "{Your Id}";

        string connectionString = "Your  connection string";
        string containerName = "konwledgebase";


        [TestMethod]
        public async Task Test_Get_Knowledge_Base_Detail_Async_Should_Ret_Detail_Model()
        {
            // Arrange
            KnowledgeBaseService service = new KnowledgeBaseService();

            // Act
            var acutal = await service.GetKnowledgebaseDetail(subKey, knowledgeBaseId);

            // Assert
            Assert.IsNotNull(acutal);
        }

        [TestMethod]
        public async Task Test_Download_Knowledge_Base_Contents_Async_Should_Ret_Content()
        {
            // Arrange
            var env = Library.Enums.KnowledgeBaseEnum.Environment.Test.GetStringValue();
            List<string> srcs = new List<string>() { "SmartLightFAQ.tsv" };
            KnowledgeBaseService service = new KnowledgeBaseService();

            //Act
            var acutal = await service.DownloadKnowledgeBaseContents(subKey, knowledgeBaseId, env, srcs);

            // Assert
            Assert.IsTrue(!string.IsNullOrEmpty(acutal));
        }

        [TestMethod]
        public async Task Test_Import_Knowledge_Base_Async_Should_Ret_Status_Success()
        {
            // Arrange
            var srcFileName = "SampleFAQ.tsv"; 
            var srcFilePath = "https://drive.google.com/uc?export=download&id=1vBxM4cw3hjiiYYYZRTn4eGN-2ZUr5af0";
            srcFilePath = "https://tocalai.blob.core.windows.net/konwledgebase/SampleFAQ.tsv";
            KnowledgeBaseService service = new KnowledgeBaseService();

            // Act
            var actual = await service.ImportKnowledgeBase(subKey, knowledgeBaseId, srcFileName, srcFilePath);

            // Assert
            Assert.AreEqual(ActionStatus.Success, actual.ResultStatus);
        }

        [TestMethod]
        public async Task Test_Publish_Knowledge_Base_Async_Should_Ret_Status_Success()
        {
            // Arrange
            KnowledgeBaseService service = new KnowledgeBaseService();

            // Act
            var actual = await service.PublishKnowledgeBase(subKey, knowledgeBaseId);

            // Assert
            Assert.AreEqual(ActionStatus.Success, actual.ResultStatus);
        }

        [TestMethod]
        public async Task Test_Upload_To_Azure_Storage_Should_Ret_Status_Success()
        {
            // Arrange
            var fileName = Guid.NewGuid().ToString() + "-" + "SampleFAQ.tsv";
            var filePath = @"D:\Tmp\SampleFAQ.tsv";
            AzureStorageService service = new AzureStorageService();

            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                // Act
                var result = await service.UploadToAzureStorage(connectionString, containerName, fileName, stream);

                // Assert
                Assert.IsTrue(result.ResultStatus == ActionStatus.Success);
            }
        }

        [TestMethod]
        public async Task Test_Delete_Knowledge_Base_Async_Should_Ret_Status_Success()
        {
            // Arrange
            // SmartLightFAQ.tsv CustomerServiceFAQ.tsv SampleFAQ.tsv
            List<string> srcs = new List<string>() { "SampleFAQ.tsv" };
            KnowledgeBaseService service = new KnowledgeBaseService();

            // Act
            var actual = await service.DeleteKnowledgeBase(subKey, knowledgeBaseId, srcs);

            // Assert
            Assert.AreEqual(ActionStatus.Success, actual.ResultStatus);

        }
    }   
}
