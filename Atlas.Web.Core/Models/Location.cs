using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class Location
    {
        public Guid Id { get; set; }
        public string Lat { get; set; }
        public string Long { get; set; }
        public string FullAddress { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }
}
