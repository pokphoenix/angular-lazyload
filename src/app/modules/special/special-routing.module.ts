import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropTableComponent } from './components/drag-and-drop-table/drag-and-drop-table.component';


const routes: Routes = [
  { path:'',redirectTo:'drag-and-drop-table',pathMatch:'full'},
  {path:'drag-and-drop-table',component:DragAndDropTableComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
