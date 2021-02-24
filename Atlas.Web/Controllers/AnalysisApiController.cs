using Atlas.Web.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Atlas.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalysisController : ControllerBase
    {
        private readonly AtlasUmbracoApi _contentApi;
        public AnalysisController(UmbracoApiHttpClient httpClient)
        {
            _contentApi = new AtlasUmbracoApi(httpClient.Client,false);
        }

        [HttpGet]
        [Route("{countryId}")]
        public List<Atlas.Web.Controllers.Models.AnalysisViewModel> Analysis(int countryId)
        {
            return _contentApi.ContentApi.Analysis(countryId, "").ToList();
        }
    }
}
