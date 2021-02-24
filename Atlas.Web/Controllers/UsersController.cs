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
    public class UsersController : ControllerBase
    {
        private readonly AtlasUmbracoApi _api;
        public UsersController(UmbracoApiHttpClient httpClient)
        {
            _api = new AtlasUmbracoApi(httpClient.Client, false);
        }

        [HttpGet]
        [Route("GetUser/{email}/{password}")]
        public Models.UserViewModel GetUser(string email, string password)
        {
            return _api.UserApi.GetUserByEmailAndPassword(email, password, string.Empty);
        }
    }
}
