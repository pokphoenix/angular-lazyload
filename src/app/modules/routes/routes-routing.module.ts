import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './components/route/route.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { OptionalRouteComponent } from './components/optional-route/optional-route.component';
import { RouteParamMapComponent } from './components/route-param-map/route-param-map.component';
import { RelativeNavigationComponent } from './components/relative-navigation/relative-navigation.component';
import { RelativeNavigationDetailComponent } from './components/relative-navigation-detail/relative-navigation-detail.component';
import { ChildRouteComponent } from './components/child-route/child-route.component';
import { ChildRouteOverviewComponent } from './components/child-route-overview/child-route-overview.component';
import { ChildRouteContactComponent } from './components/child-route-contact/child-route-contact.component';


const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:RouteComponent},
  {path:'param-map',component:RouteParamMapComponent},
  {path:'param-map/:id',component:RouteParamMapComponent},
  {path:'optional-route',component:OptionalRouteComponent},
  {path:'optional-route/:id',component:OptionalRouteComponent},
  {path:'relative-navigation',component:RelativeNavigationComponent},
  {path:'relative-navigation/:id',component:RelativeNavigationDetailComponent},
  {
    path:'child-route',component:ChildRouteComponent,
    children:[
      {path:'overview',component:ChildRouteOverviewComponent},
      {path:'contact',component:ChildRouteContactComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
