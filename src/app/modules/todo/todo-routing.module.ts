import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/list/list.component';
import { TodoAddComponent } from './components/add/add.component';
import { TodoEditComponent } from './components/edit/edit.component';
import { TodoViewComponent } from './components/view/view.component';


const routes: Routes = [
  { path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:TodoListComponent},
  {path:'add',component:TodoAddComponent},
  {path:'edit/:id',component:TodoEditComponent},
  {path:'view/:id',component:TodoViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
