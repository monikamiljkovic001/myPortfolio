import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})

export class ContactComponent implements OnInit{
  emailForm!: FormGroup;
  isSubmitted: any;

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
       this.isSubmitted = true;
      } else{
          this.isSubmitted = false;
      } 
  }


}
