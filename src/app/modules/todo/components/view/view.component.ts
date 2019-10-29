import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormService } from '../../service/form.service';

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
    private activeAouter: ActivatedRoute, 
    private api: ApiService,
    private formService:FormService
  ) { }

  ngOnInit() {
    this.getDetail(this.activeAouter.snapshot.params['id']);
 
    this.todoForm = this.formService.getTodoForm();

    $("form input").attr("disabled","disabled");

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
}
