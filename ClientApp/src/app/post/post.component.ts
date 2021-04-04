import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from '../feed/feed.component';

export class User implements OnInit{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  ngOnInit() {
  
  }

}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() userPost: UserPost;

  constructor(private router: Router) { }


  user: User = new User("Andreea", "Grijuc");

  numOfLikes: number = 0;
  likeButtonClicked() {
    this.numOfLikes++;
  }
  comment = "";
  commList = [];

  postComm() {
    this.commList.push(this.comment);
    this.comment = "";
  }
  showComments = false;
  addComments() {
    this.showComments = !this.showComments;

  }
  ngOnInit() {

  }

  goToPostDetails() {
    this.router.navigate(['post-details/' + this.userPost.id]);
  }
}

