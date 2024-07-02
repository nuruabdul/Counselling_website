import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isCollapsed = true;
navbarOpen = false;
showMenu: any;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}
