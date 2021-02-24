using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Atlas.Web.Controllers
{
    public partial class AtlasUmbracoApi
    {
        partial void CustomInitialize()
        {
            BaseUri = HttpClient.BaseAddress;
        }
    }
}
