import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'app-edit', 
  templateUrl: '../add/add.component.html',   // use the same page with add component
  styleUrls: ['../add/add.component.css']
})
export class TodoEditComponent implements OnInit {

  actionName = "update";
  todoForm: FormGroup;
  id:number= null;
 
  constructor(
    private activeAouter: ActivatedRoute, 
    private router: Router, 
    private api: ApiService,
    private formService:FormService
  ) { }
 
  ngOnInit() {
     
    this.getDetail(this.activeAouter.snapshot.params['id']);
 
    this.todoForm = this.formService.getTodoForm();
  }
 
  getDetail(id) {
    this.api.getTodo(id)
      .subscribe(data => {
        this.id = data.id;
        let form = {};
        for (const key in data) {
          if(key!="id")
            form[key] = data[key];
        }
        this.todoForm.setValue(form);
      });
  }
  saveTodo() {
 
    let form = this.todoForm.value;

    this.api.updateTodo(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/todo']);
        }, (err) => {
          console.log(err);
        }
      );
     
  }

}
