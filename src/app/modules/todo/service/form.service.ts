import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  getTodoForm(){
    return  this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      firstname:[''
        ,[Validators.required, Validators.minLength(3)]
      ],
    });
  }


}
