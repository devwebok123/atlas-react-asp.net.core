using Atlas.Web.Core.Models;
using Atlas.Web.Core.Services;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Atlas.Web.Core.HttpClients
{
    public interface IUmbracoHttpClient
    {
        AtlasUmbracoApi GetUmbracoApiClient();
    }
    public class UmbracoHttpClient : IUmbracoHttpClient
    {
        private readonly AppSettingsConfiguration _configuration;
        private HttpClient _httpClient;


        public UmbracoHttpClient(HttpClient httpClient, AppSettingsConfiguration configuration)
        {
            _configuration = configuration;
            _httpClient = httpClient;
        }

        public AtlasUmbracoApi GetUmbracoApiClient()
        {
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _configuration.UmbracoApiKey);
            return new AtlasUmbracoApi(_httpClient, false)
            {
                BaseUri = new Uri(_configuration.UmbracoApiBaseUrl)
            };
        }
    }
}
