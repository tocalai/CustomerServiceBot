using CustomerService.Library;
using CustomerService.Library.Extensions;
using CustomerService.Library.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static CustomerService.Library.Enums.KnowledgeBaseEnum;
using static CustomerService.Library.Enums.ServiceEnum;

namespace CustomerService.Service
{
    public struct Response
    {
        public HttpResponseHeaders Headers { get; set; }
        public string ResponseString { get; set; }

        public Response(HttpResponseHeaders headers, string response)
        {
            this.Headers = headers;
            this.ResponseString = response;
        }
    }
    public class KnowledgeBaseManger
    {        
        private static readonly Lazy<KnowledgeBaseManger> lazy = new Lazy<KnowledgeBaseManger>(() => new KnowledgeBaseManger());

        public static KnowledgeBaseManger Instance { get { return lazy.Value; } }

        private KnowledgeBaseManger()
        {

        }

        public async Task<HttpResponseMessage> Get(string uri, string key)
        {
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Get;
                request.RequestUri = new Uri(uri);
                request.Headers.Add(Constants.QNA_SUBSCRIPTION_KEY_HEADER, key);

                var response = await client.SendAsync(request);
                return response;
            }
        }

        public async Task<Response> GetPatchResponse(string uri, string key)
        {
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Get;
                request.RequestUri = new Uri(uri);
                request.Headers.Add(Constants.QNA_SUBSCRIPTION_KEY_HEADER, key);

                var response = await client.SendAsync(request);
                var responseBody = await response.Content.ReadAsStringAsync();
                return new Response(response.Headers, responseBody);
            }
        }

        public async Task<Response> Patch(string uri, string key, string body)
        {
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = new HttpMethod("PATCH");
                request.RequestUri = new Uri(uri);
                request.Content = new StringContent(body, Encoding.UTF8, "application/json");
                request.Headers.Add(Constants.QNA_SUBSCRIPTION_KEY_HEADER, key);

                var response = await client.SendAsync(request);
                var responseBody = await response.Content.ReadAsStringAsync();
                return new Response(response.Headers, responseBody);
            }
        }

        public async Task<HttpResponseMessage> Post(string uri, string key)
        {
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Post;
                request.RequestUri = new Uri(uri);
                request.Headers.Add("Ocp-Apim-Subscription-Key", key);

                var response = await client.SendAsync(request);
                return response;
            }
        }

        public async Task<ActionResultModel> WaitUpateComplete(string uri, string key, TimeSpan? timeSpan = null)
        {
            timeSpan = timeSpan ?? TimeSpan.FromMinutes(3);
            var done = false;
            var elapsed = 0;
            while((!done) && elapsed < timeSpan.Value.TotalMilliseconds)
            {
                var resp = await GetPatchResponse(uri, key);
                var fields = JsonConvert.DeserializeObject<Dictionary<string, string>>(resp.ResponseString);

                String state = fields[Constants.OPERATION_STATE];
                if (state.CompareTo(OperationState.NotStarted.GetStringValue()) == 0 || state.CompareTo(OperationState.Running.GetStringValue()) == 0)
                {
                    var wait = resp.Headers.GetValues(Constants.RESPONSE_HEADER_RETRY_AFTER).First();

                    var waitAfterMillisces = Int32.Parse(wait) * 1000;
                    Thread.Sleep(waitAfterMillisces);
                    elapsed += waitAfterMillisces;
                }
                else
                {
                    done = true;
                }
            }

            return done ? new ActionResultModel(ActionStatus.Success) : new ActionResultModel(ActionStatus.Failed, "wait timeout");
        }

        public async Task<ActionResultModel> UpdateKonwledgeBase(string key, string uri, string body)
        {
            ActionResultModel result = new ActionResultModel();

            var response = await Patch(uri, key, body);
            var operation = response.Headers.GetValues(Constants.RESPONSE_HEADER_LOCATION).First();

            var statusUri = Constants.CONITIVE_HOST + Constants.QNA_SERVICE + operation;

            result = await WaitUpateComplete(statusUri, key);

            return result;
        }

    }
}
