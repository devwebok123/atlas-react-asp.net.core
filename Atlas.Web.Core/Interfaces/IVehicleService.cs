using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Interfaces
{
    public interface IVehicleService
    {
        Task<Vehicle> AddUpdateVehicle(Vehicle vehicle);
        Task<Vehicle> GetVehicle(Guid id);
        Task<List<Vehicle>> GetVehicles();
        Task<List<Vehicle>> GetVehicles(Guid id);
    }
}
