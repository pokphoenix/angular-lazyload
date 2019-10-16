import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceEmployeeListComponent } from './component/employee-list/employee-list.component';
import { ServiceEmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ServiceEmployeeIndexComponent } from './component/employee-index/employee-index.component';


const routes: Routes = [
  { path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employee-list',component:ServiceEmployeeListComponent},
  {path:'employee-detail',component:ServiceEmployeeDetailComponent},
  {path:'employee',component:ServiceEmployeeIndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
