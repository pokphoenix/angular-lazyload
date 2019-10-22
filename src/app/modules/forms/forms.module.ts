import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormsModule } from '@angular/forms';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';

import { UtilsModule } from '../utils/utils.module';
import { FormTdfComponent } from './components/form-tdf/form-tdf.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './services/enrollment.service';

@NgModule({
  declarations: [FormNormalComponent, FormTemplateDrivenComponent, FormHeaderComponent, FormTdfComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    FormsModule,
    UtilsModule
  ],
  providers:[EnrollmentService]
})
export class ModuleForms { }
