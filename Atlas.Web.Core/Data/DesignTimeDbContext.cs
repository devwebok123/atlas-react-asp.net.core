using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Atlas.Web.Core.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<MDContext>
    {
        public MDContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            var builder = new DbContextOptionsBuilder<MDContext>();
            builder.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            return new MDContext(builder.Options);
        }
    }
}
