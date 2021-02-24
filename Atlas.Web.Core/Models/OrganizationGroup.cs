using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class OrganizationGroup
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public virtual List<OrganizationMember> Members { get; set; }
    }
}
