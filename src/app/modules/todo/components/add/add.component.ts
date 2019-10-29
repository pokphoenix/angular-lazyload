import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup;
  actionName = "add";
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
 
 
  ngOnInit() {
    
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });

    // if(this.actionName==null){
    //   this.actionName = "add";
    //   this.todoForm = this.formBuilder.group({
    //     title: ['', Validators.compose([Validators.required])],
    //   });
    // }
  }
 
  saveTodo() {
    // const payload = {
    //   title: this.todoForm.controls.title.value,
    // };
    let form = this.todoForm.value;

    this.api.addTodo(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/todo']);
        }, (err) => {
          console.log(err);
        });
  }

}
