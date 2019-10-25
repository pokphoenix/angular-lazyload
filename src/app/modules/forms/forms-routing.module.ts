import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { FormTdfComponent } from './components/form-tdf/form-tdf.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormBindingDataComponent } from './components/binding-data/binding-data.component';


const routes: Routes = [
  { path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header',component:FormHeaderComponent},
  {path:'normal',component:FormNormalComponent},
  {path:'template-driven',component:FormTemplateDrivenComponent},
  {path:'tdf',component:FormTdfComponent},
  {path:'reactive',component:FormReactiveComponent},
  {path:'binding-data',component:FormBindingDataComponent},
  //{ path: 'hero/:id', component: HeroDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
