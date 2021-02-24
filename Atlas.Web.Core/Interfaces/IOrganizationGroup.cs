using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Interfaces
{
    public interface IOrganizationGroupService
    {
        Task<OrganizationGroup> AddUpdateOrganizationGroup(OrganizationGroup group);
        Task<OrganizationGroup> GetOrganizationGroup(Guid id);
        Task<List<OrganizationGroup>> GetOrganizationGroups();
        Task<List<OrganizationGroup>> GetOrganizationGroups(Guid id);
    }
}
