import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {
  @Input("currentUrl") currentUrl:string = "";
  routeId : number = 0;
  constructor( private router:Router
    ,private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=> {
      if (params.get("id")!=null){
        this.routeId = parseInt(params.get("id")) ;
      }
    });
  }

  goPrevious(url){
    this.router.navigate([url,this.routeId-1]);
  }
  goNext(url){
    this.router.navigate([url,this.routeId+1]);
  }


}
