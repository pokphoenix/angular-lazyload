import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceEmployeeListComponent } from './component/employee-list/employee-list.component';
import { ServiceEmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ServiceEmployeeIndexComponent } from './component/employee-index/employee-index.component';
import { ServiceEmployeeJsonUrlComponent } from './component/employee-json-url/employee-json-url.component';


const routes: Routes = [
  { path:'',redirectTo:'employee-normal',pathMatch:'full'},
  {path:'employee-detail',component:ServiceEmployeeDetailComponent},
  {path:'employee-list',component:ServiceEmployeeListComponent},
  {path:'employee-normal',component:ServiceEmployeeIndexComponent},
  {path:'employee-json',component:ServiceEmployeeJsonUrlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
