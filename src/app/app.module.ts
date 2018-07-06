import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls.component';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { PollAddComponent } from './polls/poll-add/poll-add.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    PollListComponent,
    PollAddComponent,
    PollDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
