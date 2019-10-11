import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'customers',pathMatch:'full'},
  {path:'customers', loadChildren: 'src/app/modules/customers/customers.module#CustomersModule'},
  {path:'orders', loadChildren: 'src/app/modules/orders/orders.module#OrdersModule'},
  {path:'ngclass', loadChildren: 'src/app/modules/ng-classes/ng-classes.module#NgClassesModule'},
  {path:'form', loadChildren: 'src/app/modules/forms/forms.module#ModuleForms'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
