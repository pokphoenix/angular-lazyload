import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RelativeNavigationComponent } from './components/relative-navigation/relative-navigation.component';
import { OptionalRouteComponent } from './components/optional-route/optional-route.component';
import { RouteComponent } from './components/route/route.component';
import { RouteDetailComponent } from './components/route-detail/route-detail.component';
import { UtilsModule } from '../utils/utils.module';
import { RouteParamMapComponent } from './components/route-param-map/route-param-map.component';
import { RouteHeaderComponent } from './components/route-header/route-header.component';
import { RelativeNavigationDetailComponent } from './components/relative-navigation-detail/relative-navigation-detail.component';
import { ChildRouteComponent } from './components/child-route/child-route.component';
import { ChildRouteOverviewComponent } from './components/child-route-overview/child-route-overview.component';
import { ChildRouteContactComponent } from './components/child-route-contact/child-route-contact.component';


@NgModule({
  declarations: [RelativeNavigationComponent, OptionalRouteComponent, RouteComponent, RouteDetailComponent, RouteParamMapComponent, RouteHeaderComponent, RelativeNavigationDetailComponent, ChildRouteComponent, ChildRouteOverviewComponent, ChildRouteContactComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    UtilsModule
  ]
})
export class RoutesModule { }
