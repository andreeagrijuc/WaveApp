import { Component, Input, OnInit } from '@angular/core';
import { User } from '../post/post.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],




})
export class HomeComponent implements OnInit {

  @Input() user: User;
  

  constructor() {}

  ngOnInit(): void { }

  postComm() { }
  addComments() {}

  addPost() {

  }
}
