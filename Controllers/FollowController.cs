using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities;
using Wave.Entities.Models;

namespace Wave.Controllers
{
    public class FollowController : Controller
    {
        private WaveContext _db;

        public FollowController(WaveContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult<List<Follow>> GetUserFollowers(int userId)
        {
            return _db.Followers.Where(follower => follower.FollowedBy.Id == userId).ToList();
        }
        [HttpGet]
        public ActionResult<List<Follow>> GetUserFollowing(int userId)
        {
            return _db.Followers.Where(follower => follower.Following.Id == userId).ToList();
        }
    }
}
