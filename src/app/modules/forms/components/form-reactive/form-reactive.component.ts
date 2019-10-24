import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators,FormArray } from '@angular/forms';
import { forbiddenNameValidator, fnForbiddenNameValidator } from '../../share/user-name.validator';
import { PasswordValidator } from '../../share/password.validator';
import { RegistrationService } from '../../services/registration.service';


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
  
  

  constructor(private fb:FormBuilder,private _registrationService:RegistrationService ) { }

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
    // let storeData = this.registrationForm.getRawValue();
    // console.log("loadApiDataAll : ",storeData); 
    
    // this for remove array before click this method 
    while (this.alternateEmails.length !== 0) {
      this.alternateEmails.removeAt(0)
    }

    // for (const key in this.alternateEmails.value) {
    //   console.log("p : "+key);
    //   this.alternateEmails.removeAt(key);      
    //important if use this method  array will not empty 
    //explain  
      // arr = ['p1','p2','p3']
      // arr.removeAt(0) ; 
      // arr= ['p2','p3']
      // arr.removeAt(1) ;
      // arr=['p2'];
      // arr.removeAt(2) ;  // not found index 2 in lastest arr 
      // arr=['p2'];
      //to fix that situation 
      //use  arr.removeAt(0) only  
      //explain 
      // arr = ['p1','p2','p3']
      // arr.removeAt(0);
      // arr = ['p2','p3']
      // arr.removeAt(0);
      // arr = ['p3']
      // arr.removeAt(0);
      // arr = []
    // }
    this.registrationForm.setValue({ // much setting all value in form  
      userName:'Pok',
      email:'pok@mail.com',
      subscribe:[true],
      password:'test',
      confirmPassword:'test',
      address:{
        city:'City',
        state:'State',
        postalCode:'12345'
      },
      //alternateEmails: ['mail1']  //  setvalue in this  will work if has array before click this method
      //important if you create more than one array  you much set the same array length
      //ex  alternateEmails: ['mail1','mail2']     
      alternateEmails: []     
    });

    // this for push array
    let arrCount = 2; 
    for(let i=1 ; i <= arrCount ; i++){
      this.alternateEmails.push(this.fb.control('mail'+i));
    }


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

  onSubmit(){
    this._registrationService.registor(this.registrationForm.value).subscribe(
      response=>console.log('Success!',response),
      error => console.error('Error!',error)
    );
  }

  onReset(){
    // let storeData = this.registrationForm.getRawValue();
    // console.log("onReset : ",storeData); // show value before click this method
    // this.registrationForm.reset();  // this for reset value ( it is the same use   button type=reset )
    // above function found problem  array is not empty  (it has length and value is null)


    while (this.alternateEmails.length !== 0) {
      this.alternateEmails.removeAt(0);
    }
    this.registrationForm.setValue({
      userName:'',
      email:'',
      subscribe:[false],
      password:'',
      confirmPassword:'',
      address:{
        city:'',
        state:'',
        postalCode:''
      },
      alternateEmails: []     
    });
  
  }
}
