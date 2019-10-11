import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormNormalComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule
  ]
})
export class ModuleForms { }
