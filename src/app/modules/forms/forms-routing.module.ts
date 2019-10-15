import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';


const routes: Routes = [
  { path:'',redirectTo:'normal',pathMatch:'full'},
  {path:'normal',component:FormNormalComponent},
  {path:'template-driven',component:FormTemplateDrivenComponent},
  //{ path: 'hero/:id', component: HeroDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
