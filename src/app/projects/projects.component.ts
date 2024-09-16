import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

projectInfoVisible = false;
projectName = '';
projectDescription = ''
isHovered = false;
movieDisplay:boolean = false;

projects = [
  { class: 'toDo',  name: 'To Do List', description: 'A simple to do list application', imageUrl: 'assets/images/todo.jpg',},
  // { class: 'omdb',  name: 'OMDB', description: 'A movie database application', imageUrl: 'assets/images/imdb.jpg' },
  { class: 'weather',  name: 'Weather App', description: 'A weather forecasting application', imageUrl: 'assets/images/weather.jpg' },
  { class: 'game',  name: 'Game', description: 'A simple game application', imageUrl: 'assets/images/game.jpg' },
  { class: 'socialMedia',  name: 'Social Media', description: 'A social media platform application', imageUrl: 'assets/images/socialmedia.jpg' },
  { class: 'guessNum', name: 'Guess The Number', description: 'A simple game application', imageUrl: 'assets/images/guessNum.jpg'},
  { folder: 'theWilliam',  name: 'The William', description: 'A personal project application', imageUrl: 'assets/images/theWilliam.jpg' },
];

showProjectInfo(name: string, description: string) {
  this.isHovered = true;
  this.projectName = name;
  this.projectDescription = description;
}


hideProjectInfo() {
  this.isHovered = false;
  this.projectName = '';
  this.projectDescription = '';
}



handleClick(project: any) {
  let url: string;

  if (project.name === 'The William') {
    url = `http://localhost:4201/`;  
  } else if (project.folder) {
    url = `assets/projects/${project.folder}/src/index.html`; 
  } else {
    url = `assets/projects/${project.class}.html`;
  }
  window.open(url, '_blank');
}

}
