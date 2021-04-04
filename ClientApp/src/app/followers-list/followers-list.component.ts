import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {
  followers: Follower[] = [
    new Follower("Andreea", "Grijuc", "../../assets/waveIcon.png"),
    new Follower("Andreea", "Grijuc", "../../assets/waveIcon.png"),
    new Follower("Andreea", "Grijuc", "../../assets/waveIcon.png")
  ]
  constructor() { }

  ngOnInit() {
  }

}
export class Follower {
  firstName: string;
  lastName: string;
  profilePic: string;

  constructor(firstName:string, lastName:string, profilePic:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePic = profilePic;

  }
}
