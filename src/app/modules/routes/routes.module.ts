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


@NgModule({
  declarations: [RelativeNavigationComponent, OptionalRouteComponent, RouteComponent, RouteDetailComponent, RouteParamMapComponent, RouteHeaderComponent, RelativeNavigationDetailComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    UtilsModule
  ]
})
export class RoutesModule { }
