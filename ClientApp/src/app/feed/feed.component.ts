import { Component, OnInit } from '@angular/core';

export class UserPost {
  authorName: string;
  bodyPost: string;
  likesNum: number;
  id: number;

  constructor(id: number, authorName: string, bodyPost: string, likesNum: number) {
    this.id = id;
    this.authorName = authorName;
    this.likesNum = likesNum;
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
    new UserPost(1, "Andreea", "test 1", 3),
    new UserPost(2, "Iuli", "test 2", 30),
    new UserPost(3, "Floricel", "test 3", 6),
    new UserPost(4, "Dana", "test 4", 15)
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
