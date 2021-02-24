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
    [Route("api/staff")]
    [ApiController]
    public class OrganizationMembersApi : ControllerBase
    {
        private readonly IOrganizationMemberService _service;
        public OrganizationMembersApi(IOrganizationMemberService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<OrganizationMember>> GetOrganizationMembers()
        {
            return await _service.GetOrganizationMembers();
        }

        [HttpGet]
        [Route("id")]
        public async Task<OrganizationMember> GetOrganizationMember(Guid id)
        {
            return await _service.GetOrganizationMember(id);
        }

        [HttpPost]
        public async Task<OrganizationMember> AddUpdateOrganizationMember(OrganizationMember staff)
        {
            return await _service.AddUpdateOrganizationMember(staff);
        }
    }
}
