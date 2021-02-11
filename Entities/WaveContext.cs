using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wave.Entities.Models;

namespace Wave.Entities
{
    public class WaveContext : DbContext
    {
        public WaveContext(DbContextOptions<WaveContext> options) : base(options)
        {
        }
        public DbSet<Comment> Comments { get; set; }

        public DbSet<Post> Posts { get; set; }

        public DbSet<User> Users { get; set; } 

        public DbSet<Follow> Followers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasMany(u => u.FollowersList)
                .WithOne(fu => fu.FollowedBy)
                .HasForeignKey(fu => fu.FollowedById)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>()
                .HasMany(u => u.FollowingList)
                .WithOne(fu => fu.Following)
                .HasForeignKey(fu => fu.FollowingId)
                .OnDelete(DeleteBehavior.Restrict);
        }

       
    }

   
}
