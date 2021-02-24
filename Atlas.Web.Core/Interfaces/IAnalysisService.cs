using Atlas.Web.Core.Constants;
using Atlas.Web.Core.Services.Models;
using System;
using System.Collections.Generic;

namespace Atlas.Web.Core.Services
{
    public interface IAnalysisService
    {
        List<AnalysisViewModel> GetAnalysis(int countryId, int pageSize, Enums.SortDirection sortDirection);
        AnalysisViewModel GetItem(Guid id);
    }
}