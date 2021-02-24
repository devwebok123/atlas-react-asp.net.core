using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Models;
using Atlas.Web.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Atlas.Web.Controllers
{
    [Route("api/routers")]
    [ApiController]
    public class RoutersApi : ControllerBase
    {
        private readonly IRouterService _service;
        public RoutersApi(IRouterService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<Router>> GetRouters()
        {
            return await _service.GetRouters();
        }

        [HttpGet]
        [Route("id")]
        public async Task<Router> GetRouter(Guid id)
        {
            return await _service.GetRouter(id);
        }

        [HttpPost]
        public async Task<Router> AddUpdateRouter(Router router)
        {
            return await _service.AddUpdateRouter(router);
        }
    }
}
