import { PollsService } from './polls/polls.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls.component';
import { PollListComponent } from './polls/poll-list/poll-list.component';
import { PollAddComponent } from './polls/poll-add/poll-add.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    PollListComponent,
    PollAddComponent,
    PollDetailComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [PollsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
