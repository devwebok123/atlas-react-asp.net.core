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
    [Route("api/groups")]
    [ApiController]
    public class OrganizationGroupsApi : ControllerBase
    {
        private readonly IOrganizationGroupService _service;
        public OrganizationGroupsApi(IOrganizationGroupService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<OrganizationGroup>> GetOrganizationGroups()
        {
            return await _service.GetOrganizationGroups();
        }

        [HttpGet]
        [Route("id")]
        public async Task<OrganizationGroup> GetOrganizationGroup(Guid id)
        {
            return await _service.GetOrganizationGroup(id);
        }

        [HttpPost]
        public async Task<OrganizationGroup> AddUpdateOrganizationGroup(OrganizationGroup group)
        {
            return await _service.AddUpdateOrganizationGroup(group);
        }
    }
}
