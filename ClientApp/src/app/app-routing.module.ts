import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FeedComponent } from './feed/feed.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { FollowingListComponent } from './following-list/following-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: 'profile-panel',
        canActivate: [AuthGuardService],
        component: ProfilePanelComponent
      },
      {
        path: 'feed-posts-list',
        canActivate: [AuthGuardService],
        component: FeedComponent,
        children: [
          {
            path: 'feed',
            canActivate: [AuthGuardService],
            component: FeedComponent,
          },
          {
            path: 'followers',
            canActivate: [AuthGuardService],
            component: FollowersListComponent
          },
          {
            path: 'following',
            canActivate: [AuthGuardService],
            component: FollowingListComponent
          },
        ],
      }
    ]
  },
  
  /*{
    path: 'post-details/:id',
    canActivate: [AuthGuardService],
    component: PostDetailsComponent,
  },*/
    {
      path: '**', component: PageNotFoundComponent,
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
