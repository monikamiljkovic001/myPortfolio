import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

links = [
  {name: 'Bio', url:'bio'},
  {name: 'Education', url:'education'},
  {name: 'Experience', url:'experience'},
  {name: 'Contact', url:'contact'},
]

}
