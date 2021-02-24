using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Interfaces
{
    public interface IOrganizationMemberService
    {
        Task<OrganizationMember> AddUpdateOrganizationMember(OrganizationMember member);
        Task<OrganizationMember> GetOrganizationMember(Guid id);
        Task<List<OrganizationMember>> GetOrganizationMembers();
        Task<List<OrganizationMember>> GetOrganizationMembers(Guid id);
    }
}
