using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Atlas.Web.Services
{
    public class UmbracoApiHttpClient
    {
        public HttpClient Client { get; private set; }

        public UmbracoApiHttpClient(HttpClient httpClient, IConfiguration config, IHttpContextAccessor httpContextAccessor)
        {
            httpClient.BaseAddress = new Uri(config["AppSettings:UmbracoApiBaseUrl"]);
            httpClient.DefaultRequestHeaders.Add("X-Api-Key", config["AppSettings:UmbracoApiKey"]);

            //var currentUser = httpContextAccessor.HttpContext?.User;

            //if (currentUser != null && !string.IsNullOrEmpty(currentUser.SerialNumber()))
            //    httpClient.DefaultRequestHeaders.Add("X-User-Identity", currentUser.SerialNumber());

            Client = httpClient;
        }
    }
}
