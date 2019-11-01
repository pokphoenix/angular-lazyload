import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleComponent } from './components/google/google.component';
import { FacebookComponent } from './components/facebook/facebook.component';


const routes: Routes = [
  { path:'',redirectTo:'google',pathMatch:'full'},
  {path:'google',component:GoogleComponent},
  {path:'facebook',component:FacebookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
