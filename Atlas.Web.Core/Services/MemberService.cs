using Atlas.Web.Core.HttpClients;
using Atlas.Web.Core.Models;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Services
{
    public class MemberService
    {
        private readonly IAtlasUmbracoApi _api;
        private readonly IMemoryCache _cache;
        public MemberService(IUmbracoHttpClient httpClient, IMemoryCache cache)
        {
            _api = httpClient.GetUmbracoApiClient();
            _cache = cache;
        }
        public List<OrganizationMember> GetMembers(Guid organizationId)
        {
            //return _cache.GetOrCreate(Constants.CacheKeys.OrganizationMemberCacheKey, x => this.GetMembers(organizationId))
            ////Get all members from Umbraco
            //_api.UserApi.GetUsers();

            ////
            return new List<OrganizationMember>();
        }

        private List<OrganizationMember> dGetMembers(Guid organizationId)
        {
            return new List<OrganizationMember>();
        }

        public OrganizationMember AddMember(OrganizationMember member)
        {
            return new OrganizationMember();
        }

    }
}
