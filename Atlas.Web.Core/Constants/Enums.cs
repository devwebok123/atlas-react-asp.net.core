using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Web.Core.Constants
{
    public class Enums
    {
        //TODO: CB: Consider making comm methods an configurable list with their own implementation
        public enum NotificationProtocols
        {
            Email = 0,
            WebApp = 1,
            MobileApp = 2,
            SMS = 3
        }

        public enum SortDirection
        {
            Ascending = 0,
            Descending = 1
        }
    }
}
