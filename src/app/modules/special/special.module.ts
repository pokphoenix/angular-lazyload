import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialRoutingModule } from './special-routing.module';
import { DragAndDropTableComponent } from './components/drag-and-drop-table/drag-and-drop-table.component';
import { GoogleBasicComponent } from './components/google-map/basic/basic.component';
import { GoogleMapListComponent } from './components/google-map/list/list.component';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../todo/service/api.service';



@NgModule({
  declarations: [DragAndDropTableComponent, GoogleBasicComponent, GoogleMapListComponent, RecaptchaComponent],
  imports: [
    CommonModule,
    SpecialRoutingModule,
    HttpClientModule
  ],
  providers:[ApiService ]
})
export class SpecialModule { }
