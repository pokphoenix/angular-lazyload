import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'basic',pathMatch:'full'},
  {path:'customers', loadChildren: 'src/app/modules/customers/customers.module#CustomersModule'},
  {path:'orders', loadChildren: 'src/app/modules/orders/orders.module#OrdersModule'},
  {path:'ngclass', loadChildren: 'src/app/modules/ng-classes/ng-classes.module#NgClassesModule'},
  {path:'form', loadChildren: 'src/app/modules/forms/forms.module#ModuleForms'},
  {path:'basic', loadChildren: 'src/app/modules/basic/basic.module#BasicModule'},
  {path:'service', loadChildren: 'src/app/modules/service/service.module#ServiceModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
