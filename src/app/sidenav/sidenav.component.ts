import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  constructor(public router: Router) {}

  @Input() isOpen: boolean = false;
  @Output() closeSidenav = new EventEmitter<void>();

  close() {
    this.closeSidenav.emit();
  }
}
