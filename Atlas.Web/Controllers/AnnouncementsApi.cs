using Atlas.Web.Core.Interfaces;
using Atlas.Web.Core.Models;
using Atlas.Web.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Atlas.Web.Controllers
{

    [Route("api/announcements")]
    [ApiController]
    public class AnnouncementsApi : ControllerBase
    {
        private readonly IAnnouncementsService _service;
        private readonly Guid orgId = new Guid("3FA85F64-5717-4562-B3FC-2C963F66AFA6"); //TODO
        public AnnouncementsApi(IAnnouncementsService service)
        {
            _service = service;
        }

        [HttpGet]
        public List<Announcement> GetAnnouncements()
        {
            return _service.GetAnnouncements(orgId).Result;
        }

        [HttpGet]
        [Route("{id}")]
        public Announcement GetAnnouncement(Guid id)
        {
            return _service.GetAnnouncement(orgId, id).Result;
        }

        [HttpPost]
        public async Task<Announcement> AddUpdateAnnouncement(Announcement announcement)
        {
            return await _service.AddAnnouncement(announcement);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<bool> Delete(Guid id)
        {
            return await _service.DeleteAnnouncement(id);
        }
    }
}
