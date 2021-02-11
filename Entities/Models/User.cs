using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wave.Entities.Models
{
    public class User
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public static DateTime ProfileCreatedAt { get; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public string ProfilePic {get; set; }

        public string Role { get; set; }

        public List<Post> Posts { get; set; }

        public List<Follow> FollowersList { get; set; }
     
        public List<Follow> FollowingList { get; set; }
       
    }
}
