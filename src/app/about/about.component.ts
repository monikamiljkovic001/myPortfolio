import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  showContactForm: boolean = false;
  emailNotValid!: boolean;

  isSideNavOpen: boolean = false;
  links = [
    { name: 'Bio', url: 'bio' },
    { name: 'Education', url: 'education' },
    { name: 'Experience', url: 'experience' },
  ];

  toggleSidenav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSidenav(): void {
    this.isSideNavOpen = false;
  }

  onDisplayContact() {
    this.showContactForm = true;
  }

  closeForm() {
    this.showContactForm = false;
  }
}
