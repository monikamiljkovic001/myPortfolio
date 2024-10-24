import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class HomePageComponent{

  isSideNavOpen: boolean = false;
  nav_item: any;
  isGetInTouchOpen = false;
  

  toggleSidenav() : void {
  this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSidenav(): void {
    this.isSideNavOpen = false; 
  }

  onLink(event: any) {
    this.toggleSidenav();  
  }

  toggleGetInTouch(){
    this.isGetInTouchOpen = !this.isGetInTouchOpen
  }

  closePopGetInTouch(){
    this.isGetInTouchOpen = false;
  }
  
}
