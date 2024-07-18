import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn = false; // Flag to track login state
 
  errorMessage: string | null = null; // Error message holder

  constructor(private authService: AuthService, private router: Router) {
    // Subscribe to authentication state changes
    this.authService.userLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  logout() {
    this.authService.logout();
    // Redirect or update UI accordingly upon logout
    // Example: Redirect to login page
    this.router.navigate(['/login']);
  }
}
