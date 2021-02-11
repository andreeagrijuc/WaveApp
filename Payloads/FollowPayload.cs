using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities.Models;

namespace Wave.Payloads
{
    public class FollowPayload
    {
        public int Id { get; set; }

        public User Following { get; set; }

        public User FollowedBy { get; set; }

        public int FollowedById { get; set; }

        public int FollowingId { get; set; }
    }
}
