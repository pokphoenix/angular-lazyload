import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropTableComponent } from './components/drag-and-drop-table/drag-and-drop-table.component';
import { GoogleMapListComponent } from './components/google-map/list/list.component';
import { GoogleBasicComponent } from './components/google-map/basic/basic.component';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';


const routes: Routes = [
  { path:'',redirectTo:'drag-and-drop-table',pathMatch:'full'},
  {path:'drag-and-drop-table',component:DragAndDropTableComponent},
  { path:'google-map',redirectTo:'google-map/list',pathMatch:'full'},
  {
    path:'google-map'
    ,children:[
      {path:'list',component:GoogleMapListComponent},
      {path:'basic',component:GoogleBasicComponent}
    ]
  },
  {path:'recaptcha',component:RecaptchaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
