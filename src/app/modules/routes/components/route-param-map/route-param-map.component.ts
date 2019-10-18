import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import UtilRoutes from 'src/app/services/utils/routes';

@Component({
  selector: 'app-route-param-map',
  templateUrl: './route-param-map.component.html',
  styleUrls: ['./route-param-map.component.css']
})
export class RouteParamMapComponent implements OnInit {

  @Input("childRouteId") routeId:any = 0 ;
  
  currentUrl = "";

  constructor( private router:Router
    ,private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.routeId = UtilRoutes.getCurrentRouteId(this.route);
    this.currentUrl = UtilRoutes.getCurrentUrlWithOutId(this.router,this.routeId);
  }

 

}
