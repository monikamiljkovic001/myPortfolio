import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

links = [
  {name: 'Bio', url:'bio'},
  {name: 'Education', url:'education'},
  {name: 'Experience', url:'experience'},
]

emailForm!: FormGroup;

isSideNavOpen: any;

constructor(private fb: FormBuilder){}

ngOnInit(){
  this.emailForm = this.fb.group({
    name:['',[Validators.required, Validators.minLength(4)]],
    email:['', [Validators.required,  Validators.email]],
    message:['', [Validators.required]]
  })
}


onSubmit() {
  if(this.emailForm.valid){
     this.emailForm.reset(); 
    } 
}

toggleSidenav() : void {
  this.isSideNavOpen = !this.isSideNavOpen;
  }

  closeSidenav(): void {
    this.isSideNavOpen = false; 
  }


}
