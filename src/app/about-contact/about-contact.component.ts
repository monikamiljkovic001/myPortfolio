import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css']
})

export class AboutContactComponent implements OnInit{

  @Output() close = new EventEmitter()
  
  emailForm!: FormGroup;
  emailNotValid: boolean = false;
  sentSuccesfully: boolean = false;
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.emailForm = this.fb.group({
        name:['', [Validators.required, Validators.minLength(4)]],
        email:['', [Validators.required, Validators.email]],
        message:['', Validators.required]
      })
  }

  onSubmit() {
    if(this.emailForm.valid){
      this.emailForm.reset();
      this.close.emit();
      this.emailNotValid = false;
      this.sentSuccesfully = true;
    } {
      this.emailNotValid = true;
      setTimeout(()=>{
        this.emailNotValid = false;
      }, 5000)
    }
    }
    
    closeForm(){
      this.close.emit()
    }

}
