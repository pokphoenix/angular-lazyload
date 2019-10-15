import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [NgSwitchComponent, BasicIndexComponent, HeaderComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    UtilsModule
  ]
})
export class BasicModule { }
