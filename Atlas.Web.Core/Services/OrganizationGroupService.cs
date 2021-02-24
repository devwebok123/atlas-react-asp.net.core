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
    public class OrganizationGroupService : IOrganizationGroupService
    {
        private readonly MDContext _ctx;
        public OrganizationGroupService(MDContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<OrganizationGroup>> GetOrganizationGroups()
        {
            return await _ctx.OrganizationGroups.ToListAsync();
        }

        public async Task<List<OrganizationGroup>> GetOrganizationGroups(Guid id)
        {
            return await _ctx.OrganizationGroups.Where(x => x.Id == id).ToListAsync();
        }

        public async Task<OrganizationGroup> AddUpdateOrganizationGroup(OrganizationGroup OrganizationGroup)
        {
            //TODO Validation
            if (OrganizationGroup.Id == Guid.Empty)
                OrganizationGroup.Id = Guid.NewGuid();

            if (_ctx.OrganizationGroups.AsNoTracking().Where(x => x.Id == OrganizationGroup.Id).FirstOrDefault() == null)
                _ctx.Add(OrganizationGroup);
            else
                _ctx.Update(OrganizationGroup);

            await _ctx.SaveChangesAsync();
            return OrganizationGroup;
        }

        public async Task<OrganizationGroup> GetOrganizationGroup(Guid id)
        {
            return await _ctx.OrganizationGroups.Where(x => x.Id == id).FirstOrDefaultAsync();
        }


    }
}
