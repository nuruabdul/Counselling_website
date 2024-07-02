import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css'] 
})
export class DashboardComponent {
  showNav: boolean = false;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
