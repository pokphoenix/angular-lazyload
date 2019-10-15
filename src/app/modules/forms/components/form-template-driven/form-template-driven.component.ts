import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/models/user.model';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

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

