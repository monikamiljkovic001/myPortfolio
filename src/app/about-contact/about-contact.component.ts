import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.css'],
})
export class AboutContactComponent implements OnInit {
  @Output() close = new EventEmitter();

  emailForm!: FormGroup;
  emailNotValid: boolean = false;
  sentSuccesfully: boolean = false;

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
      this.close.emit();
    }, 3000);

    this.emailForm.reset();
  }

  closeForm() {
    this.close.emit();
  }
}
