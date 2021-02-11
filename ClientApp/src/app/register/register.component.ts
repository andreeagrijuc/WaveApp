import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export class RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submittedPressed = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.createFrom();
  }
  createFrom(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password: [null, [Validators.required, Validators.minLength(3)]],
        confPassword: [null, [Validators.required]],
      }, { validators: this.confPassMatchesValidator() })
    });
  }
  confPassMatchesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.get('password').value !== control.get('confPassword').value ? { confPass: true } : null;
    };
  }
  submit(): void {
    this.submittedPressed = true;
    if (this.registerForm.invalid) {
      return;
    }

    const registerData: RegisterData = new RegisterData(
      this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.password.value
    )
    console.log(registerData);
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get passwords() {
    return this.registerForm.get('passwords');
  }
  get password() {
    return this.registerForm.get('passwords').get('password');
  }
  get confPassword() {
    return this.registerForm.get('passwords').get('confPassword');
  }
}

