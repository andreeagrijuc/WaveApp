import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  

  constructor() {}
   

  
  ngOnInit() {
    // window.localStorage.setItem('token', '2343546');
   /* const token = window.localStorage.getItem('token');
    console.log(token);*/
    //window.localStorage.removeItem('token');
  }
  
}

