using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities.Models;

namespace Wave.Payloads
{
    public class CommentPayload
    {
        public int Id { get; set; }

        public string BodyComm { get; set; }

        public User Author { get; set; }

        public int PostId { get; set; }
    }
}
