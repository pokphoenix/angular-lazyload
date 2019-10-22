import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators,FormArray } from '@angular/forms';
import { forbiddenNameValidator, fnForbiddenNameValidator } from '../../share/user-name.validator';
import { PasswordValidator } from '../../share/password.validator';

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
  registrationForm:FormGroup;
  
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName:[''
           ,[ 
              Validators.required 
              ,Validators.minLength(3) 
              ,forbiddenNameValidator
              ,fnForbiddenNameValidator(/password/) 
            ]
      ],
      email:[''],
      subscribe:[false],
      password:[''],
      confirmPassword:[''],
      address: this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      }) , 
      alternateEmails: this.fb.array([])
    } , { validator : PasswordValidator } );


    // this for  check subscribe much set validate to email 
    // if uncheck clear validator to email 
    this.registrationForm.get('subscribe').valueChanges
    .subscribe(checkedValue=>{
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email.setValidators(Validators.required);
        }else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
    });

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

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

}
