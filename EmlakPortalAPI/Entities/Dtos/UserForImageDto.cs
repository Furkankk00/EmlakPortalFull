using Core.Entities.Abstract;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Dtos
{
    public class UserForImageDto : IDto
    {
        public int UserId { get; set; }
        public int BuildingId { get; set; }
        public IFormFile Image { get; set; }
    }
}
