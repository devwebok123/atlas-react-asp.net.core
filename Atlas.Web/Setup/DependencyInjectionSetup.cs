using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Atlas.Web.Controllers;
using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Services;
using Atlas.Web.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Atlas.Web.Setup
{
    public static class DependencyInjectionSetup {
        public static void SetupAppDI(this IServiceCollection services)
        {
            //HttpClients
            services.AddHttpClient<UmbracoApiHttpClient>();

            //Services
            services.AddScoped<IVehicleService, VehicleService>();
            services.AddScoped<IAnnouncementsService, AnnouncementsService>();
            services.AddScoped<IOrganizationGroupService, OrganizationGroupService>();
            services.AddScoped<IOrganizationMemberService, OrganizationMemberService>();
            services.AddScoped<IRouterService, RouterService>();
        }
    }
}
