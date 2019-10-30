import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validate/validation.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input("control") control: FormControl;

  msg;

  constructor() {}

  ngOnInit() {
  }

  //Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(){
    this.msg = this.getErrorMessage();
  }

  // use this method  for use inside html it will call validate message all time  (but it call 2 time per use 1 time)
  // get errorMessage() {
  //   for (let propertyName in this.control.errors) {
  //     if (this.control.errors.hasOwnProperty(propertyName)) {
  //       return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
  //     }
  //   }    
  //   return null;
  // }

  // this method will call one time  but can update realtime when use in  ngDoCheck
  getErrorMessage(){
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName)) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }    
    return null;
  }

}
