using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Models
{
    //TODO: CB: This implementation is tentative. Rewrite
    public class OrganizationMember
    {
        public Guid Id { get; set; }
        public string DisplayTitle { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Phone { get; set; }
        public Guid UmbracoMemberId { get; set; } 
        public List<OrganizationGroup> Groups { get; set; }
    }
}
