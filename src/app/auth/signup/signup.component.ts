import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(name, email, password)
      .subscribe((response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/polls']);
      }, err => {
        alert('failed to register');
      }
    );
  }

}
