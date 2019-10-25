import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';


const routes: Routes = [
  //if setting  pathMatch:'prefix' 
	//when type only "test" in address bar   it will  redirect to  /basic/test 
  {path:'',redirectTo:'basic',pathMatch:'full'},  
  {path:'customers', loadChildren: 'src/app/modules/customers/customers.module#CustomersModule'},
  {path:'orders', loadChildren: 'src/app/modules/orders/orders.module#OrdersModule'},
  {path:'ngclass', loadChildren: 'src/app/modules/ng-classes/ng-classes.module#NgClassesModule'},
  {path:'form', loadChildren: 'src/app/modules/forms/forms.module#ModuleForms'},
  {path:'basic', loadChildren: 'src/app/modules/basic/basic.module#BasicModule'},
  {path:'service', loadChildren: 'src/app/modules/service/service.module#ServiceModule'},
  // {path:'route', loadChildren: 'src/app/modules/routes/routes.module#RoutesModule'},
  {path:'route', loadChildren:()=> import('src/app/modules/routes/routes.module').then(
    m=> m.RoutesModule
  )},
  {path:'special', loadChildren: 'src/app/modules/special/special.module#SpecialModule'},
  {path:"**",component:PageNotfoundComponent } // important this much lowest order  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
