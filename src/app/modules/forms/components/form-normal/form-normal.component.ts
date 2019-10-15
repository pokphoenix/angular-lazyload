import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.css']
})
export class FormNormalComponent implements OnInit {

  //mForm:any={};
  mForm: UserModel = new UserModel();

  debug:any ="";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    //  window.alert(JSON.stringify(formData));
     this.debug = JSON.stringify(formData)
  }

}

class UserModel{
  firstName :String;
  lastName :String;
  email :String;
  password:String;
}