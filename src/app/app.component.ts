import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';

  // mouseX = 0;
  // mouseY = 0;
  // cursorX = 0;
  // cursorY = 0;

  // ngOnInit() {
  //   this.animateCursor();
  // }

  // animateCursor() {
  //   const cursor = document.querySelector('.cursor') as HTMLElement;

  //   const updateCursor = () => {
  //     const distX = this.mouseX - this.cursorX;
  //     const distY = this.mouseY - this.cursorY;
  //     this.cursorX += distX * 0.1;
  //     this.cursorY += distY * 0.1;
  //     cursor.style.transform = `translate3d(${this.cursorX}px, ${this.cursorY}px, 0)`;
  //     requestAnimationFrame(updateCursor);
  //   };

  //   requestAnimationFrame(updateCursor);
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.mouseX = event.clientX - 25;
  //   this.mouseY = event.clientY - 25;
  // }

  
}
