import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoForm: FormGroup;
  actionName = "add";
  constructor(
    private formBuilder: FormBuilder
    , private router: Router
    , private api: ApiService 
    , private formService:FormService 
    ) { }
 
  ngOnInit() {
    this.todoForm = this.formService.getTodoForm();
    // this.todoForm.get('title').valueChanges.subscribe(val => {
    //     console.log(`My name is ${val}.`);
    // });
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
