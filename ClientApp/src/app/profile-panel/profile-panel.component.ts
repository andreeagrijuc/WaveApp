import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent implements OnInit {
  firstName: string;
  constructor(private userService: UserService) {
    this.userService.firstaNameStream.subscribe((firstName: string) => {
      this.firstName = firstName;
    });
  }

  ngOnInit() {
  }

}
