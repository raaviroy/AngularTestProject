import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid || this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      this.showSuccessMessage = false;
      this.showErrorMessage = true;
      return;
    }

    console.log('User Details:', this.registrationForm.value);
    this.showSuccessMessage = true;
    this.showErrorMessage = false;
  }
}
