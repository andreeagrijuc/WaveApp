import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './post/comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedComponent } from './feed/feed.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { FollowerCardComponent } from './follower-card/follower-card.component';
import { FollowingListComponent } from './following-list/following-list.component';
import { FeedPostsListComponent } from './feed-posts-list/feed-posts-list.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

 ''

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CommentComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FeedComponent,
    PostDetailsComponent,
    LoginComponent,
    ProfilePanelComponent,
    FollowersListComponent,
    FollowerCardComponent,
    FollowingListComponent,
    FeedPostsListComponent,
    

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }

    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
