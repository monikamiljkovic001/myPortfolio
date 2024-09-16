import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

nav_item: string = '';

isSideNavOpen: boolean = false;

toggleSidenav() : void {
this.isSideNavOpen = !this.isSideNavOpen;
}

updateNavItem(name: string) {
this.nav_item = name;  
}

clearNewItem() {
  this.nav_item = ''
  }


  closeSidenav() {
this.isSideNavOpen = false  
}
  onLink(event: Event){
    this.isSideNavOpen = false
  }

}
