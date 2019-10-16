import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceEmployeeListComponent } from './component/employee-list/employee-list.component';
import { ServiceEmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ServiceEmployeeService } from './services/employee.service';
import { EmployeeHeaderComponent } from './component/employee-header/employee-header.component';
import { ServiceEmployeeIndexComponent } from './component/employee-index/employee-index.component';
import { UtilsModule } from '../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEmployeeJsonUrlComponent } from './component/employee-json-url/employee-json-url.component';


@NgModule({
  declarations: [ServiceEmployeeListComponent, ServiceEmployeeDetailComponent, EmployeeHeaderComponent, ServiceEmployeeIndexComponent, ServiceEmployeeJsonUrlComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    UtilsModule,
    HttpClientModule
  ],
  providers:[ServiceEmployeeService],
})
export class ServiceModule { }
