import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

isSideNavOpen: boolean = false;
projectInfoVisible = false;
projectName = '';
isHovered = false;
movieDisplay:boolean = false;

projects = [
  { class: 'toDo',  name: 'To Do List', imageUrl: 'assets/images/todo.jpg',},
  // { class: 'omdb',  name: 'OMDB', description: 'A movie database application', imageUrl: 'assets/images/imdb.jpg' },
  { class: 'weather',  name: 'Weather App', description: 'A weather forecasting application', imageUrl: 'assets/images/weather.jpg' },
  { class: 'game',  name: 'Game', imageUrl: 'assets/images/game.jpg' },
  { class: 'socialMedia',  name: 'Social Media',  imageUrl: 'assets/images/socialmedia.jpg' },
  { class: 'guessNum', name: 'Guess The Number',  imageUrl: 'assets/images/guessNum.jpg'},
  { folder: 'theWilliam',  name: 'The William Restaurant', imageUrl: 'assets/images/theWilliam.jpg' },
];
  
showProjectInfo(name: string,) {
  this.isHovered = true;
  this.projectName = name;

}

hideProjectInfo() {
  this.isHovered = false;
  this.projectName = '';
}


handleClick(project: any) {
  let url: string;

  if (project.name === 'The William') {

    url = `https://github.com/monikamiljkovic001/theWilliam`;  
  } else if (project.folder) {
    url = `assets/projects/${project.folder}/src/index.html`; 
  } else {
    url = `assets/projects/${project.class}.html`;
  }
  
  window.open(url, '_blank');
}

toggleSidenav() : void {
  this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSidenav(): void {
    this.isSideNavOpen = false; 
  }

}
