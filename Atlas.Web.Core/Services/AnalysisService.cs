using Atlas.Web.Core.HttpClients;
using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Models;
using Atlas.Web.Core.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static Atlas.Web.Core.Constants.Enums;

namespace Atlas.Web.Core.Services
{
    public class AnalysisService : IAnalysisService
    {
        private readonly IAtlasUmbracoApi _contentApi;
        private readonly AppSettingsConfiguration _config;

        public AnalysisService(IUmbracoHttpClient httpClient, AppSettingsConfiguration config)
        {
            _contentApi = httpClient.GetUmbracoApiClient();
            _config = config;
        }

        public List<AnalysisViewModel> GetAnalysis(int countryId, int pageSize, SortDirection sortDirection)
        {
            if (sortDirection == SortDirection.Ascending)
                return _contentApi.ContentApi.Analysis(countryId, string.Empty).OrderByDescending(x => x.DateOfPublication).Take(pageSize).ToList();

            return _contentApi.ContentApi.Analysis(countryId, string.Empty).Take(pageSize).ToList();
        }

        public AnalysisViewModel GetItem(Guid id)
        {
            var model = new AnalysisViewModel();
            model = _contentApi.ContentApi.Analysis(1058, string.Empty).Where(x => x.Id == id).FirstOrDefault(); //TODO Hardcodet CountryId
            model.MainContent = model.MainContent.Replace("/media/", _config.UmbracoBaseUrl + "/media/"); //TODO, Should come from UmbracoApi
            return model;
        }
    }
}
