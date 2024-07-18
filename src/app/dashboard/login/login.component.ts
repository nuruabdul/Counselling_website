import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onFormSubmitted(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        if (error.error && error.error.error) {
          console.error('Firebase error message:', error.error.error.message);
        }
      }
    );

    console.log(form.value);
    form.reset();
  }
}
