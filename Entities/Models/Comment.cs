using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wave.Entities.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public string BodyComm { get; set; }

        public static DateTime CommentCreatedAt { get; }

        public User Author { get; set; }

        public int PostId { get; set; }
    }
}
