 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Wave.Entities;
using Wave.Entities.Models;
using Wave.Payloads;
using static Wave.Enums;

namespace Wave.Controllers
{
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly WaveContext _db;

        public UserController(WaveContext db)
        {
            _db = db;
        }
        //create user
        [HttpPost]
        public ActionResult<User> Create([FromBody] UserPayload payload)
        {
            try
            {
                var userToAdd = new User
                {
                    FirstName = payload.FirstName,
                    LastName = payload.LastName,
                    Email = payload.Email
                };
                _db.Users.Add(userToAdd);
                _db.SaveChanges();
                return Ok(userToAdd);
            }
            catch (Exception)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
         
            }
        }
        //read user
        [HttpGet]
        public ActionResult<List<User>> GetAllUsers(int pageSize, int pageNum, UsersSortType sortType)
        {
            var currentUser = HttpContext.User;
            if(currentUser.HasClaim(claim => claim.Type == "Role"))
            {
                var role = currentUser.Claims.FirstOrDefault(c => c.Type == "Role").Value;
                if (role=="Admin")
                {
                    var usersQuery = _db.Users.AsNoTracking();

                    if (sortType == UsersSortType.FirstNameAsc)
                        usersQuery = usersQuery.OrderBy(u => u.FirstName);
                    else if (sortType == UsersSortType.FirstNameDesc)
                        usersQuery = usersQuery.OrderByDescending(u => u.FirstName);
                    else if (sortType == UsersSortType.LastNameAsc)
                        usersQuery = usersQuery.OrderBy(u => u.LastName);
                    else if (sortType == UsersSortType.LastNameDesc)
                        usersQuery = usersQuery.OrderByDescending(u => u.LastName);
                    else
                        usersQuery = usersQuery.OrderBy(u => u.FirstName);

                    usersQuery = usersQuery
                        .Skip((pageNum - 1) * pageSize)
                        .Take(pageSize);

                    var users = usersQuery.ToList();

                    return users;

                }
                else
                {
                    return BadRequest(new { status = false, message = "user not authorised" });
                }
            }
            else
            {
                return BadRequest(new { status = false, message = "bad request" });
            }

        }

        [HttpGet]
        public ActionResult<User> GetById(int Id)
        {
            return _db.Users.Where(user=>Id==user.Id).Single();
        }

        //update user
        [HttpPost]
        public ActionResult<User> Update([FromBody] UserPayload payload)
        {
            try
            {
                if (payload.Id.HasValue)
                {
                    var userToBeUpdated = _db.Users.SingleOrDefault(user => payload.Id.Value == user.Id);
                    userToBeUpdated.FirstName = payload.FirstName;
                    userToBeUpdated.LastName = payload.LastName;
                    userToBeUpdated.Email = payload.Email;
                    _db.SaveChanges();
                    return Ok(userToBeUpdated);
                }
                else
                {
                    return new StatusCodeResult(StatusCodes.Status400BadRequest);
                }
            }
            catch (Exception)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpDelete]
        public ActionResult Delete(int Id)
        {
            try
            {
                var userToBeDeleted = _db.Users.Single(User => Id == User.Id);
                _db.Users.Remove(userToBeDeleted);
                _db.SaveChanges();
                return Ok(new {status=true });
            }
            catch (Exception)
            { 
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

        }

    }
}
