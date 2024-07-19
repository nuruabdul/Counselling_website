import { Component, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'] 
})
export class DashboardComponent {
  showNav: boolean = false;
  isLoggedIn = false; // Flag to track login state
  windowWidth: number = window.innerWidth; 
 
  errorMessage: string | null = null; // Error message holder
window: any;

  constructor(private snackBar: MatSnackBar,private authService: AuthService, private router: Router) {
    // Subscribe to authentication state changes
    this.authService.userLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  ngOnInit(): void {
    // Example check (replace with actual authentication check)
    // this.isLoggedIn = !!localStorage.getItem('userToken');
  }
  logout() {
    // this.isLoggedIn = false;
    this.authService.logout();
    // Redirect or update UI accordingly upon logout
    // Example: Redirect to login page
    // localStorage.removeItem('userToken');
    // this.router.navigate(['/home']);
  }
onBookSession(){
  this.snackBar.open('Please login first to access the counsellors section.', 'Close', {
    duration: 3000, // Snackbar duration in milliseconds
    verticalPosition: 'top', // Display the snackbar at the top
    panelClass: ['custom-snackbar'] // Apply custom styles
  });
  // this.router.navigate(['/login']);
}
   // Method to toggle the navigation menu
   toggleNav(): void {
    this.showNav = !this.showNav;
  }

  // Optionally handle window resize events to toggle visibility
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if ((event.target as Window).innerWidth > 768) {
      this.showNav = false;
    }
  }
}
