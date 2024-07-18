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
  isLoggedIn = false; // Flag to track login state
  errorMessage: string | null = null; // Error message holder

  constructor(private authService: AuthService, private router: Router) {
    // Subscribe to authentication state changes
    this.authService.userLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onFormSubmitted(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(
      response => {
        console.log('Login successful', response);
        // Redirect or update UI accordingly upon successful login
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        if (error.error && error.error.error) {
          this.errorMessage = error.error.error.message;
        }
      }
    );

    form.reset();
  }

  logout() {
    this.authService.logout();
    // Redirect or update UI accordingly upon logout
    // Example: Redirect to login page
    this.router.navigate(['/login']);
  }
}
