import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';
import { NgForEx1Component } from './ng-for/components/ex1/ex1.component';


const routes: Routes = [
  { path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:BasicIndexComponent},
  {path:'ng-switch',component:NgSwitchComponent},
  {path:'ng-for',component:NgForEx1Component},
  {path:'ng-for/ex1',component:NgForEx1Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
