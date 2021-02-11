import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
