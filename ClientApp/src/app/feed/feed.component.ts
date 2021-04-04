import { Component, OnInit } from '@angular/core';
import { UserPostsService } from '../services/user-posts.service';

export class UserPost {
  authorName: string;
  bodyPost: string;
  
  id: number;

  constructor(id: number, authorName: string, bodyPost: string, ) {
    this.id = id;
    this.authorName = authorName;
    
    this.bodyPost = bodyPost;
  }
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  userPosts: UserPost[] = [
    new UserPost(1, "Andreea", "test 1"),
    new UserPost(2, "Iuli", "test 2"),
  
    new UserPost(4, "Dana", "test 4")
  ]
  
  constructor(
    private userPostsService: UserPostsService
  ) { }

  ngOnInit() {
    this.getUserPosts();
  }
  getUserPosts() {
  
  }
}
