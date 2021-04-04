import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user-service';

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
    private accountService: AccountService,
    private router: Router,
    private userService: UserService
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
    this.accountService.login(this.loginForm.value).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token", response.token);
      this.userService.addFirstName(response.firstName);
      this.router.navigateByUrl("home");
    })
  

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
