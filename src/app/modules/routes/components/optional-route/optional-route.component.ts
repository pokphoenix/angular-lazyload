import { Component, OnInit, Input } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import UtilRoutes from 'src/app/services/utils/routes';

@Component({
  selector: 'app-optional-route',
  templateUrl: './optional-route.component.html',
  styleUrls: ['./optional-route.component.css']
})
export class OptionalRouteComponent implements OnInit {

  @Input("childRouteId") routeId:number = 0 ;
  currentUrl = ""
  constructor(private router:Router,private route:ActivatedRoute) { }
  tagTest = "";
  beforeRouteId = "";
  ngOnInit() {
    this.routeId = UtilRoutes.getCurrentRouteId(this.route);
    this.currentUrl = UtilRoutes.getCurrentUrlWithOutId(this.router,this.routeId);
    
    this.route.paramMap.subscribe((params:ParamMap)=> {
      if (params.get("test")!=null){
          this.tagTest = params.get("test") ;
      }
      if (params.get("beforeRouteId")!=null){
          this.beforeRouteId = params.get("beforeRouteId") ;
      }
  });

  }

  goMain(){
    this.router.navigate(['/route/optional-route',{beforeRouteId:this.routeId,test:"pok test"}]);
  }
 

}
