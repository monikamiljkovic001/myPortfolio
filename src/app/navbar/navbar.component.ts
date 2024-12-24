import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isSideNavOpen = false;
  @Output() sidenavToggle = new EventEmitter();

  toggleSidenav() {
    this.isSideNavOpen = !this.isSideNavOpen;
    this.sidenavToggle.emit();
  }
}
