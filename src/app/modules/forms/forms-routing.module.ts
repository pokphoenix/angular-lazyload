import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNormalComponent } from './components/form-normal/form-normal.component';


const routes: Routes = [
  { path:'',redirectTo:'normal',pathMatch:'full'},
  {path:'normal',component:FormNormalComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
