import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { DropdownUrlComponent } from 'src/app/modules/utils/dropdown-url/dropdown-url.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';

@NgModule({
  declarations: [DropdownUrlComponent, BreadcrumbComponent ,ErrorMessageComponent  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports:  [
    DropdownUrlComponent,
    BreadcrumbComponent,
    ErrorMessageComponent
  ]
})
export class UtilsModule { }
