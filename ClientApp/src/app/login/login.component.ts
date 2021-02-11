import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class LoginData {
  email: string;
  password: string;

  constructor(email:string, password:string) {
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submittedPressed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createFrom();
  }
  createFrom(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(3)]],
    });
  }

  submit(): void {
    this.submittedPressed = true;
    if (this.loginForm.invalid) {
      return;
    }
  

  const loginData: LoginData = new LoginData(
    this.email.value,
    this.password.value
  )
  console.log(loginData);
}


  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
