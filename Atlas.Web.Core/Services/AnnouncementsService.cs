using Atlas.Web.Core.Data;
using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Atlas.Web.Core.Services
{
    public class AnnouncementsService : IAnnouncementsService
    {
        private readonly MDContext _ctx;
        public AnnouncementsService(MDContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<Announcement>> GetAnnouncements(Guid organizationId)
        {
            return await _ctx.Announcements.Where(x => x.OrganizationId == organizationId).ToListAsync();
        }

        public async Task<Announcement> GetAnnouncement(Guid organizationId, Guid id)
        {
            return await _ctx.Announcements.Where(x => x.OrganizationId == organizationId && x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<bool> DeleteAnnouncement(Guid id)
        {
            var item = _ctx.Announcements.Where(x => x.Id == id).FirstOrDefault();
            if (item != null)
            {
                _ctx.Announcements.Remove(item);
                await _ctx.SaveChangesAsync();
                return true;
            }
            return false;
        }


        public async Task<Announcement> AddAnnouncement(Announcement announcement)
        {
            if (announcement.Id == Guid.Empty)
                announcement.Id = Guid.NewGuid();

            if (_ctx.Announcements.AsNoTracking().Where(x => x.Id == announcement.Id).FirstOrDefault() == null)
                _ctx.Add(announcement);
            else
                _ctx.Update(announcement);

            await _ctx.SaveChangesAsync();
            return announcement;
        }
    }
}
