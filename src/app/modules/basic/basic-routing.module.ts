import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';
import { BasicNgForExComponent } from './ng-for/components/ex/ex.component';
import { BasicDataSharingParentChildComponent } from './data-sharing/components/parent-child/parent-child.component';
import { BasicDataSharingChildParentComponent } from './data-sharing/components/child-parent/child-parent.component';


const routes: Routes = [
  { path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:BasicIndexComponent},
  {path:'ng-switch',component:NgSwitchComponent},
  {path:'ng-for',redirectTo:'ng-for/ex',pathMatch:'full'},
  {path:'ng-for/ex',component:BasicNgForExComponent},
  {path:'ng-for/ex/:id',component:BasicNgForExComponent},
  {path:'data-sharing',redirectTo:'data-sharing/parent-child',pathMatch:'full'},
  {path:'data-sharing/parent-child',component:BasicDataSharingParentChildComponent},
  {path:'data-sharing/child-parent',component:BasicDataSharingChildParentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
