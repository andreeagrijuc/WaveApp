import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
//import { RegisterData } from '../user/User';

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
  successRegister: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group(
        {
          password: [null, [Validators.required, Validators.minLength(3)]],
          confPassword: [null, [Validators.required]],
        },
        { validators: this.confPasswordMatchesValidator() }
      ),
    });

    // this.firstName.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  confPasswordMatchesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.get('password').value !== control.get('confPassword').value
        ? { confPassword: true }
        : null;
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
    this.accountService.register(registerData).subscribe(
      (response) => {
        this.router.navigateByUrl("home");
        this.successRegister = true;
      },
      (error) => {
        console.log(error);
      }
    )
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

