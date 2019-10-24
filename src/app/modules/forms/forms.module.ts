import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormNormalComponent } from './components/form-normal/form-normal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateDrivenComponent } from './components/form-template-driven/form-template-driven.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';

import { UtilsModule } from '../utils/utils.module';
import { FormTdfComponent } from './components/form-tdf/form-tdf.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './services/enrollment.service';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [FormNormalComponent, FormTemplateDrivenComponent, FormHeaderComponent, FormTdfComponent, FormReactiveComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    FormsModule,
    UtilsModule,
    ReactiveFormsModule
  ],
  providers:[EnrollmentService,RegistrationService]
})
export class ModuleForms { }
