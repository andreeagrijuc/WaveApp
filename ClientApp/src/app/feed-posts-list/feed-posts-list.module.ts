import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPostsListRoutingModule } from './feed-posts-list-routing.module';
import { FollowersListComponent } from '../followers-list/followers-list.component';
import { FollowerCardComponent } from '../follower-card/follower-card.component';
import { FollowingListComponent } from '../following-list/following-list.component';
import { FeedPostsListComponent } from './feed-posts-list.component';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../post/comment/comment.component';
import { FeedComponent } from '../feed/feed.component';


@NgModule({
  declarations: [
    FollowersListComponent,
    FollowerCardComponent,
    FollowingListComponent,
    FeedPostsListComponent,
    PostComponent,
    CommentComponent,
    FeedComponent,
  ],
  imports: [
    CommonModule,
    FeedPostsListRoutingModule
  ]
})
export class FeedPostsListModule { }
