import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '../../Modal/form';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onFormSubmitted(form: NgForm) {
    if (!form.valid) {
      alert('Please enter all the required fields')
      return;
    
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signup(email, password).subscribe(
      response => {
        console.log('Signup successful', response);
        alert('Sign Up Successful');
        this.router.navigate(['/login']);

      },
      error => {
        console.error('Signup failed', error);
        if (error.error && error.error.error) {
          console.error('Firebase error message:', error.error.error.message);
        }
      }
    );

    console.log(form.value);
    form.reset();
  }
}

