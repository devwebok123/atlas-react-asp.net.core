using Atlas.Web.Core.Data;
using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Services
{
    public class OrganizationMemberService : IOrganizationMemberService
    {
        private readonly MDContext _ctx;
        public OrganizationMemberService(MDContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<OrganizationMember>> GetOrganizationMembers()
        {
            return await _ctx.OrganizationMembers.ToListAsync();
        }

        public async Task<List<OrganizationMember>> GetOrganizationMembers(Guid id)
        {
            return await _ctx.OrganizationMembers.Where(x => x.Id == id).ToListAsync();
        }

        public async Task<OrganizationMember> AddUpdateOrganizationMember(OrganizationMember OrganizationMember)
        {
            //TODO Validation
            if (OrganizationMember.Id == Guid.Empty)
                OrganizationMember.Id = Guid.NewGuid();

            if (_ctx.OrganizationMembers.AsNoTracking().Where(x => x.Id == OrganizationMember.Id).FirstOrDefault() == null)
                _ctx.Add(OrganizationMember);
            else
                _ctx.Update(OrganizationMember);

            await _ctx.SaveChangesAsync();
            return OrganizationMember;
        }

        public async Task<OrganizationMember> GetOrganizationMember(Guid id)
        {
            return await _ctx.OrganizationMembers.Where(x => x.Id == id).FirstOrDefaultAsync();
        }


    }
}
