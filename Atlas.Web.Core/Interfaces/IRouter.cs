using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Interfaces
{
    public interface IRouterService
    {
        Task<Router> AddUpdateRouter(Router router);
        Task<Router> GetRouter(Guid id);
        Task<List<Router>> GetRouters();
        Task<List<Router>> GetRouter(Guid id);
    }
}
