import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { DragAndDropTableComponent } from './components/drag-and-drop-table/drag-and-drop-table.component';
import { GoogleBasicComponent } from './components/google-map/basic/basic.component';
import { GoogleMapListComponent } from './components/google-map/list/list.component';



@NgModule({
  declarations: [DragAndDropTableComponent, GoogleBasicComponent, GoogleMapListComponent],
  imports: [
    CommonModule,
    SpecialRoutingModule
  ]
})
export class SpecialModule { }
