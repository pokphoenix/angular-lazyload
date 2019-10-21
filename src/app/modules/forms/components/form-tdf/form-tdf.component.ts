import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-form-tdf',
  templateUrl: './form-tdf.component.html',
  styleUrls: ['./form-tdf.component.css']
})
export class FormTdfComponent implements OnInit {
  topics = ['Angular','React','Vue'];

  userModel = new User("","pok@mail.com",555,"Angular","morning",true);
  topicHasError = true;
  constructor() { }

  ngOnInit() {
  }

  validateTopic(value){
    if(value==='default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

}
