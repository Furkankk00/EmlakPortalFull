using Entities.Concrete;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IBuildingService
    {

        IResult Add(Building building);
        IResult Delete(Building building);
        IResult Update(Building building);

        IListDataResult<Building> GetAll();
        ISingleDataResult<Building> GetByBuildingId(int id);
    }
}
