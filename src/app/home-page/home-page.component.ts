import { Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('1s ease-in', style({ opacity:1}))
      ]),
      transition(':leave',[
        animate('1s ease-out', style({opacity: 0}))
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None 
})
export class HomePageComponent implements OnInit, OnDestroy{

 
  isSideNavOpen: boolean = false;
  nav_item: any;
  isGetInTouchOpen = false;

  
  currentText: string = ''; 
  activeWord: string =  'Minimalist'; 
  intervalId: any; 
  currentIndex: number = 0; 
  textArray: string[] = []; 


    skills = [
      { name: 'HTML', proficiency: 90, color: 'linear-gradient(to right, #ff0080, #ff00ff)' },
      { name: 'CSS', proficiency: 90, color: 'linear-gradient(to right, #00ff99, #00cc66)' },
      { name: 'JavaScript', proficiency: 50, color: 'linear-gradient(to right, #ffff00, #ffcc00)' },
      { name: 'Angular', proficiency: 25, color: 'linear-gradient(to right, #ff4b5c, #ff2a68)' },
      { name: 'Tailwind', proficiency: 70, color: 'linear-gradient(to right, #00f2f2, #0099ff)' },
      { name: 'Bootstrap', proficiency: 70, color: 'linear-gradient(to right, #ff31f2, #ff9100)' }
    ];


  ngOnInit() {
    this.setHoverTexts(
      ['A love for simplicity', 'Enjoys clean design'],
      this.activeWord
    );
  }

  setHoverTexts(textArray: string[], word: string) {
    this.activeWord = word; 
    console.log(word)
    this.textArray = textArray;
    this.currentIndex = 0;
    this.updateText();
    this.startTextRotation();
  }


  startTextRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId); 
    }
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      this.updateText();
    }, 2000); 
  }


  updateText() {
    this.currentText = this.textArray[this.currentIndex];
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
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
  
  closeOverlay(event: MouseEvent){
    event.stopPropagation();
  }


}
