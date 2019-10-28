import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { DropdownUrlComponent } from 'src/app/modules/utils/dropdown-url/dropdown-url.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [DropdownUrlComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports:  [
    DropdownUrlComponent,
    BreadcrumbComponent
  ]
})
export class UtilsModule { }
