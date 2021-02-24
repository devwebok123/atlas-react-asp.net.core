using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class Router
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Vehicle { get; set; }
        public string Comment { get; set; }
        public List<Location> Locations { get; set; }
    }
}
