import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/polls', pathMatch: 'full' },
  { path: 'polls', component: PollsComponent },
  { path: 'poll-detail/:id', component: PollDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
