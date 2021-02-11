using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities;
using Wave.Entities.Models;
using Wave.Payloads;

namespace Wave.Controllers
{
    public class PostController : ControllerBase
    {
        private WaveContext _db;
        public PostController(WaveContext db)
        {
            _db = db;
        }
        //create post
        [HttpPost]
        public ActionResult<Post> Create([FromBody] PostPayload payload)
        {
            try
            {
                var postToAdd = new Post
                {
                    Author = payload.Author,
                    BodyPost = payload.BodyPost,
                    LikesNum = payload.LikesNum
                };
                _db.Posts.Add(postToAdd);
                _db.SaveChanges();
                return Ok(postToAdd);
            }
            catch (Exception)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
        //read post
        [HttpGet]
        public ActionResult<List<Post>> GetUserPosts(int Id)
        {
            return _db.Posts.Where(post => post.Author.Id == Id).ToList();
        }
        [HttpGet]
        public ActionResult<Post> GetById(int Id)
        {
            return _db.Posts.Where(post => post.Id == Id).Single();
        }
        //update post
        [HttpPost]
        public ActionResult<Post> Update([FromBody] PostPayload payload)
        {
            try
            {
                if (payload.Id.HasValue)
                {
                    var postToBeUpdated = _db.Posts.Single(post => payload.Id.Value == post.Id);
                    postToBeUpdated.Author = payload.Author;
                    postToBeUpdated.BodyPost = payload.BodyPost;
                    postToBeUpdated.LikesNum = payload.LikesNum;
                    _db.SaveChanges();
                    return Ok(postToBeUpdated);
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
        //delete post
        [HttpDelete]
        public ActionResult Delete(int Id)
        {
            try
            {
                var postToBeDeleted = _db.Posts.Single(Post => Id == Post.Id);
                _db.Posts.Remove(postToBeDeleted);
                _db.SaveChanges();
                return Ok(new { status = true });
            }
            catch (Exception)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
