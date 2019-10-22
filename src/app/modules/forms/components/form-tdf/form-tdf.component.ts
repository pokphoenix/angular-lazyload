import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-form-tdf',
  templateUrl: './form-tdf.component.html',
  styleUrls: ['./form-tdf.component.css']
})
export class FormTdfComponent implements OnInit {
  topics = ['Angular','React','Vue'];

  userModel = new User("","pok@mail.com",555,"Angular","morning",true);
  topicHasError = false;
  errorMsg = '';
  
  
  constructor(private _enrollmentService : EnrollmentService) { }


  ngOnInit() {
  }

  validateTopic(value){
    if(value==='default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Success!",data) , 
      error =>{
        console.error("Error!", error);
        this.errorMsg =error.statusText ;
      }
    );
  }
}
