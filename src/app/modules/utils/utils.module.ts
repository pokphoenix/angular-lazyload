import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { DropdownUrlComponent } from 'src/app/modules/utils/dropdown-url/dropdown-url.component';


@NgModule({
  declarations: [DropdownUrlComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  exports:  [
    DropdownUrlComponent
  ]
})
export class UtilsModule { }
