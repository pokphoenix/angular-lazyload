import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

declare var $: any;

@Component({
  selector: 'app-view',
  templateUrl: '../add/add.component.html',   // use the same page with add component
  styleUrls: ['../add/add.component.css']
})
export class TodoViewComponent implements OnInit {

  actionName = "view";
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

    $("form input").attr("disabled","disabled");

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
}
