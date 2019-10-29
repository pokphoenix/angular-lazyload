import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

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
    private formBuilder: FormBuilder, 
    private activeAouter: ActivatedRoute, 
    private router: Router, 
    private api: ApiService
  ) { }
 
  ngOnInit() {
     
    this.getDetail(this.activeAouter.snapshot.params['id']);
 
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });
  }
 
  getDetail(id) {
    this.api.getTodo(id)
      .subscribe(data => {
        this.id = data.id;
        this.todoForm.setValue({
          title: data.title
        });
        console.log(data);
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
