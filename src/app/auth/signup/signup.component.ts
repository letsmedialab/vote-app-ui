import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(name, email, password)
      .subscribe((res) => {
        console.log(res.token);
        console.log(res.auth);
      }, err => {
        alert('failed to register');
      }
    );
  }

}
