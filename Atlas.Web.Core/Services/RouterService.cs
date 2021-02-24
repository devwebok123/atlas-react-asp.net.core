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
    public class RouterService : IRouterService
    {
        private readonly MDContext _ctx;
        public RouterService(MDContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<Router>> GetRouters()
        {
            return await _ctx.Routers.ToListAsync();
        }

        public async Task<List<Router>> GetRouters(Guid id)
        {
            return await _ctx.Routers.Where(x => x.Id == id).ToListAsync();
        }

        public async Task<Router> AddUpdateRouter(Router Router)
        {
            //TODO Validation
            if (Router.Id == Guid.Empty)
                Router.Id = Guid.NewGuid();

            if (_ctx.Routers.AsNoTracking().Where(x => x.Id == Router.Id).FirstOrDefault() == null)
                _ctx.Add(Router);
            else
                _ctx.Update(Router);

            await _ctx.SaveChangesAsync();
            return Router;
        }

        public async Task<Router> GetRouter(Guid id)
        {
            return await _ctx.Routers.Where(x => x.Id == id).FirstOrDefaultAsync();
        }


    }
}
