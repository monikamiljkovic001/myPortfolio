import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

  @Input({required: true}) isGetInTouchOpen:boolean = false;
  @Output() onClose = new EventEmitter<void>()

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: [''],
      email:[''],
      message:['']
    })
  }

  emailForm!: FormGroup

onSubmit(){
  if(this.emailForm.valid){
    this.isGetInTouchOpen = false;
    this.onClose.emit();
  }
}

onClosePopInTouch(event: MouseEvent){
  event.stopPropagation()
  this.isGetInTouchOpen = false;
  this.onClose.emit();
}

}
