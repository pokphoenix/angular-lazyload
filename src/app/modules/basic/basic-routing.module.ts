import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';


const routes: Routes = [
  { path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:BasicIndexComponent},
  {path:'ng-switch',component:NgSwitchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
