using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Wave.Payloads
{
    public class LoginPayload
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
        public string FirstName { get; internal set; }
        public string LastName { get; internal set; }
    }
}
