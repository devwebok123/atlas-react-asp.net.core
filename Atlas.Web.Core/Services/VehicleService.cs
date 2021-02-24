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
    public class VehicleService : IVehicleService
    {
        private readonly MDContext _ctx;
        public VehicleService(MDContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<Vehicle>> GetVehicles()
        {
            return await _ctx.Vehicles.ToListAsync();
        }

        public async Task<List<Vehicle>> GetVehicles(Guid organizationId)
        {
            return await _ctx.Vehicles.Where(x => x.Organization.Id == organizationId).ToListAsync();
        }

        public async Task<Vehicle> AddUpdateVehicle(Vehicle vehicle)
        {
            //TODO Validation
            if (vehicle.Id == Guid.Empty)
                vehicle.Id = Guid.NewGuid();

            if (_ctx.Vehicles.AsNoTracking().Where(x => x.Id == vehicle.Id).FirstOrDefault() == null)
                _ctx.Add(vehicle);
            else
                _ctx.Update(vehicle);

            await _ctx.SaveChangesAsync();
            return vehicle;
        }

        public async Task<Vehicle> GetVehicle(Guid id)
        {
            return await _ctx.Vehicles.Where(x => x.Id == id).FirstOrDefaultAsync();
        }


    }
}
