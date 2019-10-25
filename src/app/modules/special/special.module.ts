import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { DragAndDropTableComponent } from './components/drag-and-drop-table/drag-and-drop-table.component';


@NgModule({
  declarations: [DragAndDropTableComponent],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ]
})
export class SpecialModule { }
