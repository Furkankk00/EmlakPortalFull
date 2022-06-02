using Entities.Concrete;
using Entities.Dtos;
using ResultsNetStandard.Abstract;
using ResultsNetStandard.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IImageService
    {
        IResult Add(UserForImageDto userForImageDto);
        IResult Delete(Image image);
        IResult Update(Image image);

        IListDataResult<Image> GetAll();
        ISingleDataResult<Image> GetByImageId(int imageId);
    }
}
