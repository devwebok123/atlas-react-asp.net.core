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
    public class IncidentsController : ControllerBase
    {
        private readonly AtlasUmbracoApi _contentApi;
        public IncidentsController(UmbracoApiHttpClient httpClient)
        {
            _contentApi = new AtlasUmbracoApi(httpClient.Client,false);
        }

        [HttpGet]
        [Route("{countryId}")]
        public List<Atlas.Web.Controllers.Models.Incident> Incidents(int countryId)
        {
            return _contentApi.ContentApi.Incidents(countryId, "").ToList();
        }
    }
}
