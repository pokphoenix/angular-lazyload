import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  // // for formGroup formControl tutorial 
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Pok'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });
  registrationForm = this.fb.group({
    userName:['Pok'],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  })

  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
  }

  loadApiDataAll(){
    this.registrationForm.setValue({ // much setting all value in form  
      userName:'Bruce',
      password:'test',
      confirmPassword:'test',
      address:{
        city:'City',
        state:'State',
        postalCode:'12345'
      }
    });
  }
  loadApiDataPatch(){
    this.registrationForm.patchValue({ // much setting some value in form 
      userName:'Bruce',
      password:'test',
      confirmPassword:'test'
    });
  }
}
