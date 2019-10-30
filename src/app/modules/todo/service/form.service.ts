import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  getTodoForm(){
    // updateOn  Possible values: 'change' | 'blur' | 'submit' Default value: 'change'
    
    return  this.formBuilder.group({
      title: ['', {updateOn : 'blur' , validators : [Validators.required]  }  ],
      firstname:[''
        ,[Validators.required, Validators.minLength(3)]
      ],
    });
  }


}
