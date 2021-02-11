using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities.Models;

namespace Wave.Payloads
{
    public class PostPayload
    {
        public int? Id { get; set; }

        public string BodyPost { get; set; }

        public int LikesNum { get; set; }

        public User Author { get; set; }
    }
}
