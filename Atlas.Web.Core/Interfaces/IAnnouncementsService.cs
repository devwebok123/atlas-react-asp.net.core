using Atlas.Web.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Interfaces
{
    public interface IAnnouncementsService
    {
        Task<Announcement> AddAnnouncement(Announcement announcement);
        Task<List<Announcement>> GetAnnouncements(Guid organizationId);
        Task<Announcement> GetAnnouncement(Guid organizationId, Guid id);
        Task<bool> DeleteAnnouncement(Guid id);
    }
}