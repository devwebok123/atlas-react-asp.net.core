using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class Vehicle
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string BandModel { get; set; }
        public int Age { get; set; }
        public string Condition { get; set; }
        public int MaxPax { get; set; }
        public string LicensPlate { get; set; }
        public string InsurancePolicyNo { get; set; }
        public string EquipmentDescription { get; set; }
        public string Comments { get; set; }
        public virtual Organization Organization { get; set; }
        public virtual OrganizationMember PrimaryDriver { get; set; }
        public virtual OrganizationMember ResponsibleForMaintenance { get; set; }
    }
}
