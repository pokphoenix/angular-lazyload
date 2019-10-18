import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './components/route/route.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { OptionalRouteComponent } from './components/optional-route/optional-route.component';
import { RouteParamMapComponent } from './components/route-param-map/route-param-map.component';
import { RelativeNavigationComponent } from './components/relative-navigation/relative-navigation.component';
import { RelativeNavigationDetailComponent } from './components/relative-navigation-detail/relative-navigation-detail.component';


const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:RouteComponent},
  {path:'param-map',component:RouteParamMapComponent},
  {path:'param-map/:id',component:RouteParamMapComponent},
  {path:'optional-route',component:OptionalRouteComponent},
  {path:'optional-route/:id',component:OptionalRouteComponent},
  {path:'relative-navigation',component:RelativeNavigationComponent},
  {path:'relative-navigation/:id',component:RelativeNavigationDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
