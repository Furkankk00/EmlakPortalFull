using Business.Abstract;
using DataAccess.Abstract;
using DataAccess.Concrete;
using Entities.Concrete;
using Entities.Dtos;
using Results.State;
using ResultsNetStandard.Abstract;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.FileHelper;
namespace Business.Concrete
{
    public class ImageManager : IImageService
    {
        private IImageDal _imageDal;
        public ImageManager(IImageDal imageDal)
        {
            _imageDal = imageDal;
        }

        public IResult Add(UserForImageDto userForImageDto)
        {
            var fileUpload = FileUploadHelper.Upload(userForImageDto.Image, "images\\");
            _imageDal.Add(new Image() 
            {
                Name = fileUpload.Name,
                DirectoryPath = fileUpload.DirectoryPath.Replace('\\', '/'),
                FullDirectoryPath = fileUpload.FullDirectoryPath.Replace('\\', '/'),
                Type = fileUpload.Type,
                IsApproved = true,
                UserId = userForImageDto.UserId,
                BuildingId = userForImageDto.BuildingId
            });
            return new SuccessResult("Image Added");
        }

        public IResult Delete(Image image)
        {
            _imageDal.Delete(image);
            return new SuccessResult("Image Deleted");
        }

        public IListDataResult<Image> GetAll()
        {
            return new SuccessListDataResult<Image>(_imageDal.GetAll());
        }

        public ISingleDataResult<Image> GetByImageId(int imageId)
        {
            return new SuccessSingleDataResult<Image>(_imageDal.Get(i => i.Id == imageId));
        }

        public IResult Update(Image image)
        {
            _imageDal.Update(image);
            return new SuccessResult("İmage Updated");
        }
    }
}
