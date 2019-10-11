import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';


const routes: Routes = [
  {path:'ex1',component:Example1Component},
  { path:'',
    redirectTo:'ex1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgClassesRoutingModule { }
