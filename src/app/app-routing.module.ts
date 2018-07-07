import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/polls', pathMatch: 'full' },
  { path: 'polls', component: PollsComponent, canActivate: [AuthGuard] },
  { path: 'poll-detail/:id', component: PollDetailComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
