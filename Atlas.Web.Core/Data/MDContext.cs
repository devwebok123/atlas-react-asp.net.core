using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Data
{
    public class MDContext : DbContext
    {
        public MDContext(DbContextOptions<MDContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //CB, Todo,set indexes
        }

        public DbSet<Models.Announcement> Announcements { get; set; }
        public DbSet<Models.Location> Locations { get; set; }
        public DbSet<Models.Organization> Organizations { get; set; }
        public DbSet<Models.OrganizationGroup> OrganizationGroups { get; set; }
        public DbSet<Models.OrganizationMember> OrganizationMembers { get; set; }
        public DbSet<Models.Site> Sites { get; set; }
        public DbSet<Models.Vehicle> Vehicles { get; set; }
        public DbSet<Models.Router> Routers { get; set; }

    }
}
