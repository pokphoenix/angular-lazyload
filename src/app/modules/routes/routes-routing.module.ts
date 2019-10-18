import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './components/route/route.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { OptionalRouteComponent } from './components/optional-route/optional-route.component';
import { RouteParamMapComponent } from './components/route-param-map/route-param-map.component';


const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:RouteComponent},
  {path:'param-map',component:RouteParamMapComponent},
  {path:'param-map/:id',component:RouteParamMapComponent},
  {path:'optional-route',component:OptionalRouteComponent},
  {path:'optional-route/:id',component:OptionalRouteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
