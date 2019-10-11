import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgClassesRoutingModule } from './ng-classes-routing.module';
import { Example1Component } from './components/example1/example1.component';


@NgModule({
  declarations: [Example1Component],
  imports: [
    CommonModule,
    NgClassesRoutingModule
  ]
})
export class NgClassesModule { }
