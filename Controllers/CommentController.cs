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
    public class CommentsController : ControllerBase 
    {
        private WaveContext _db;
        public CommentsController(WaveContext db)
        {
            _db = db;
        }
        //create comment
        [HttpPost]
        public ActionResult<Comment> Create([FromBody] CommentPayload payload)
        {
            try
            {
                var commentToAdd = new Comment
                {
                    Author = payload.Author,
                    BodyComm = payload.BodyComm,
                    PostId = payload.PostId
                };
                _db.Comments.Add(commentToAdd);
                _db.SaveChanges();
                return Ok(commentToAdd);
            }
            catch (Exception)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
        //read comment
        [HttpGet]
        public ActionResult<List<Comment>> GetAllCommentsOnAPost(int Id)
        {
            return _db.Comments.Where(comm => comm.PostId == Id).ToList();
        }
        //delete comment
        [HttpDelete]
        public ActionResult Delete(int Id)
        {
            try
            {
                var CommToBeDeleted = _db.Comments.Single(Comment => Id == Comment.Id);
                _db.Comments.Remove(CommToBeDeleted);
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
