using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wave.Entities.Models
{
    public class Post
    {
        public int Id { get; set; }

        public string BodyPost { get; set; }

        public static DateTime PostCreatedAt { get; }

        public int LikesNum { get; set; }

        public User Author { get; set; }

        public List<Comment> CommentsList { get; set; }

    }
}
