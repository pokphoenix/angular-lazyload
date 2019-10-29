import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TodoListComponent implements OnInit {
  data: Todo[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTodos()
      .subscribe(res => {
        this.data = res;
      }, err => {
        console.log(err);
      });
  }

  deleteTodo(id, index) {
    this.api.deleteTodo(id)
      .subscribe(res => {    
          this.data.splice(index,1);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
