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
    [Route("api/vehicles")]
    [ApiController]
    public class VehiclesApi : ControllerBase
    {
        private readonly IVehicleService _service;
        public VehiclesApi(IVehicleService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<List<Vehicle>> GetVehicles()
        {
            return await _service.GetVehicles();
        }

        [HttpGet]
        [Route("id")]
        public async Task<Vehicle> GetVehicle(Guid id)
        {
            return await _service.GetVehicle(id);
        }

        [HttpPost]
        public async Task<Vehicle> AddUpdateVehicle(Vehicle vehicle)
        {
            return await _service.AddUpdateVehicle(vehicle);
        }
    }
}
