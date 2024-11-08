import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

@Output() sidenavToggle = new EventEmitter()
isSideNavOpen: boolean = false;

toggleSidenav() {
  this.isSideNavOpen = !this.isSideNavOpen;
  this.sidenavToggle.emit();
  }

}


