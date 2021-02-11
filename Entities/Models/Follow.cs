using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wave.Entities.Models
{
    public class Follow
    {
        public int Id { get; set; }

        public User Following { get; set; }

        public User FollowedBy { get; set; }

        public int FollowedById { get; set; }

        public int FollowingId { get; set; }

    }
}


//Both relationships between 'Follow' and 'User.Followers' and between 'Follow' and 'User.Following' could use {'UserId'} as the foreign key.
//To resolve this, configure the foreign key properties explicitly in 'OnModelCreating' on at least one of the relationships 