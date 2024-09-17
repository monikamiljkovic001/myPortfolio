import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  isSideNavOpen: boolean = false;
  nav_item: any;

  toggleSidenav() : void {
  this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSidenav(): void {
    this.isSideNavOpen = false; 
  }


  onLink(event: any) {
    this.toggleSidenav();  
  }

}
