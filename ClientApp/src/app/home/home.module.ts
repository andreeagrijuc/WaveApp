import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProfilePanelComponent } from '../profile-panel/profile-panel.component';
import { FeedPostsListComponent } from '../feed-posts-list/feed-posts-list.component';


@NgModule({
  declarations: [
    ProfilePanelComponent,
    FeedPostsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
