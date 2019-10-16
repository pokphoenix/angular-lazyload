import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceEmployeeListComponent } from './component/employee-list/employee-list.component';
import { ServiceEmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ServiceEmployeeService } from './services/employee.service';
import { EmployeeHeaderComponent } from './component/employee-header/employee-header.component';
import { ServiceEmployeeIndexComponent } from './component/employee-index/employee-index.component';
import { UtilsModule } from '../utils/utils.module';

/*
learning service 
1.create service 
2.add providers 
3. in component constructor call service  and setting to component variable
*/

@NgModule({
  declarations: [ServiceEmployeeListComponent, ServiceEmployeeDetailComponent, EmployeeHeaderComponent, ServiceEmployeeIndexComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    UtilsModule
  ],
  providers:[ServiceEmployeeService],
})
export class ServiceModule { }
