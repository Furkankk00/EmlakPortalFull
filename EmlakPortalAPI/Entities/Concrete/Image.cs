using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class Image : BaseEntity
    {
        public int UserId { get; set; }
        public int BuildingId { get; set; }
        public string Name { get; set; }
        public bool IsApproved { get; set; }

        public string Type { get; set; }
        public string DirectoryPath { get; set; }
        public string FullDirectoryPath { get; set; }
    }
}
