import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { NgSwitchComponent } from './ng-switch/components/ng-switch.component';
import { BasicIndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { UtilsModule } from '../utils/utils.module';
import { BasicDataSharingParentChildComponent } from './data-sharing/components/parent-child/parent-child.component';
import { BasicDataSharingChildParentComponent } from './data-sharing/components/child-parent/child-parent.component';
import { BasicDataSharingIndexComponent } from './data-sharing/components/index/index.component';
import { BasicNgForExComponent } from './ng-for/components/ex/ex.component';
import { BasicNgForEx1Component } from './ng-for/components/ex1/ex1.component';
import { BasicNgForEx2Component } from './ng-for/components/ex2/ex2.component';
import { BasicNgForEx3Component } from './ng-for/components/ex3/ex3.component';
import { BasicNgForEx4Component } from './ng-for/components/ex4/ex4.component';
import { BasicNgForEx5Component } from './ng-for/components/ex5/ex5.component';
import { BasicLifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [NgSwitchComponent, BasicIndexComponent, HeaderComponent, BasicDataSharingParentChildComponent, BasicDataSharingChildParentComponent, BasicDataSharingIndexComponent
    , BasicNgForExComponent
    , BasicNgForEx1Component
    , BasicNgForEx2Component
    , BasicNgForEx3Component
    , BasicNgForEx4Component
    , BasicNgForEx5Component
    , BasicLifeCycleComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    UtilsModule 
  ]
})
export class BasicModule { }
