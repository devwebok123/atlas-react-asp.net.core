using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class Site
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string Comment { get; set; }
        public string EquipmentDescription { get; set; }
        public virtual Organization Organization { get; set; }
        public Location Location { get; set; }
        public virtual OrganizationMember SiteOwner { get; set; }
        public List<OrganizationMember> SiteStaff { get; set; }
        public List<Vehicle> Vehicles { get; set; }
    }
}
