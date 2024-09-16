import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  images = [
    './assets/images/header.png',
    './assets/images/slide1.png',
    './assets/images/slide2.png'
  ];

  isWhite: boolean = false;
  isHovered: boolean = false

ngAfterViewInit(): void {
 setTimeout(()=>{
  this.isWhite = true;
 },1300)
}

  
}
