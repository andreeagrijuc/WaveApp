using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Wave.Entities;
using Wave.Entities.Models;
using Wave.Payloads;
using BC = BCrypt.Net.BCrypt;

namespace Wave.Controllers
{ 
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IConfiguration _config { get; }
        private readonly WaveContext _db;
        

        public AccountController(WaveContext db, IConfiguration configuration)
        {
            _config = configuration;
            _db = db;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] LoginPayload registerPayload)
        {
            try
            {
                var existUser = _db.Users
                        .Any(u => u.Email == registerPayload.Email);
                if (existUser)
                {
                    //return JS
                }
                var userToCreate = new User
                {
                    FirstName = registerPayload.FirstName,
                    LastName = registerPayload.LastName,
                    Email = registerPayload.Email,
                    PasswordHash = BC.HashPassword(registerPayload.Password),
                    Role = "Default"
                };
                _db.Users.Add(userToCreate);
                _db.SaveChanges();
                return Ok(new { status = true });
            }
            catch (Exception)
            {

                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginPayload loginPayload)
        {
            var foundUser = _db.Users
                .SingleOrDefault(u => u.Email == loginPayload.Email);

            if (foundUser != null)
            {
                if (BC.Verify(loginPayload.Password, foundUser.PasswordHash))
                {
                    var tokenString = GenerateJSONWebToken(foundUser);
                    return Ok(new { status=true, token = tokenString });
                }
                return BadRequest(new { status = false, message = "wrond email or password" });

            }
            else
            {
                return  BadRequest(new { status = false, message = "no user with this email found" });
            }
        }
        private string GenerateJSONWebToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("Role", user.Role),

            };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddDays(30),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
