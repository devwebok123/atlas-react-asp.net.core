using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Services
{
    public class NotificationService
    {

        public void Notify<T>(T notificationItem, List<OrganizationGroup> groups, List<OrganizationMember> members)
        {
            List<OrganizationMember> selectedMembers = new List<OrganizationMember>();
            //Loop each group - Get members

            //Loop each member to get the appropriate comm method

            //Send notifications
        }
    }
}
