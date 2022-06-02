using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using Results.State;
using ResultsNetStandard.Abstract;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class BuildingManager : IBuildingService
    {
        private readonly IBuildingDal _buildingDal;
        public BuildingManager(IBuildingDal buildingDal)
        {
            _buildingDal = buildingDal;
        }

        public IResult Add(Building building)
        {
            _buildingDal.Add(building);
            return new SuccessResult("Added");
        }

        public IResult Delete(Building building)
        {
            _buildingDal.Add(building);
            return new SuccessResult("Deleted");
        }

        public IListDataResult<Building> GetAll()
        {
            return new SuccessListDataResult<Building>(_buildingDal.GetAll());
        }

        public ISingleDataResult<Building> GetByBuildingId(int id)
        {
            return new SuccessSingleDataResult<Building>(_buildingDal.Get(b => b.Id == id));
        }

        public IResult Update(Building building)
        {
            _buildingDal.Update(building);
            return new SuccessResult("Updated");
        }
    }
}
