using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Atlas.Web.Core.Models
{
    public class Announcement
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string BodyText { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public DateTime ModifiedDateTime { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid OrganizationId { get; set; }
        [NotMapped]
        public List<OrganizationGroup> SelectedGroups { get; set; }
        [NotMapped]
        public List<OrganizationMember> SelectedMembers { get; set; }
    }
}
