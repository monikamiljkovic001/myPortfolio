import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css'],
})
export class GetInTouchComponent implements OnInit {
  @Input({ required: true }) isGetInTouchOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  emailForm!: FormGroup;
  sentSuccesfully: boolean = false;
  emailNotValid: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.emailForm.invalid) {
      this.emailNotValid = true;

      setTimeout(() => {
        this.emailNotValid = false;
      }, 3000);
      return;
    }

    this.sentSuccesfully = true;
    setTimeout(() => {
      this.sentSuccesfully = false;
      this.onClose.emit();
    }, 3000);

    this.emailForm.reset();
  }

  onClosePopInTouch(event: MouseEvent) {
    event.stopPropagation();
    this.isGetInTouchOpen = false;
    this.onClose.emit();
  }
}
