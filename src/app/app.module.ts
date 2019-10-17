import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarUtilsService } from './services/utils/sidebar.service';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SidebarUtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
