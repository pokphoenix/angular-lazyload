import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { UtilsModule } from '../utils/utils.module';
import { NgForEx1Component } from './ng-for/components/ex1/ex1.component';
import { BasicDataSharingParentChildComponent } from './data-sharing/components/parent-child/parent-child.component';
import { BasicDataSharingChildParentComponent } from './data-sharing/components/child-parent/child-parent.component';
import { BasicDataSharingIndexComponent } from './data-sharing/components/index/index.component';

@NgModule({
  declarations: [NgSwitchComponent, BasicIndexComponent, HeaderComponent, NgForEx1Component, BasicDataSharingParentChildComponent, BasicDataSharingChildParentComponent, BasicDataSharingIndexComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    UtilsModule 
  ]
})
export class BasicModule { }
