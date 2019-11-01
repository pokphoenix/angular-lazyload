import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { GoogleComponent } from './components/google/google.component';
import { FacebookComponent } from './components/facebook/facebook.component';


@NgModule({
  declarations: [GoogleComponent, FacebookComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
