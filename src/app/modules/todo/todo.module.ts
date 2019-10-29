import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/list/list.component';
import { TodoAddComponent } from './components/add/add.component';
import { TodoEditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { TodoViewComponent } from './components/view/view.component';
import { UtilsModule } from '../utils/utils.module';
import { FormService } from './service/form.service';
import { ValidationService } from 'src/app/services/validate/validation.service';


@NgModule({
  declarations: [
    TodoListComponent
    , TodoAddComponent
    , TodoEditComponent
    , TodoViewComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilsModule
  ],
  providers:[ApiService,FormService,ValidationService ]
})
export class TodoModule { }
