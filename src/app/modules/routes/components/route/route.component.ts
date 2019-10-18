import { Component, OnInit } from '@angular/core';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  urlLists:any = [];
  learningLists:any = [];
  maxRouteId:number = 0;
  routeId:number = 0;
  constructor(private _sidebarUtilsService : SidebarUtilsService
    ,private router:Router
    ,private route:ActivatedRoute) {
    this.urlLists = _sidebarUtilsService.getSidebarUrlByModule("route");

    let i = 1;
    for (const data of this.urlLists) {
      console.log("data : "+JSON.stringify(data));
      if(data.url.indexOf("/route/")!=-1 && data.url != "/route/index" ){
        this.learningLists.push({
            id: i , 
            name: data.text,
            url: data.url
        });
        i++;
      }
    }
    this.maxRouteId = i-1;

    this.route.paramMap.subscribe((params:ParamMap)=> {
      if (params.get("id")!=null){
        this.routeId = parseInt(params.get("id")) 
      }
    });

  }

   

  ngOnInit() {
  }

  onSelect(data){
    this.router.navigate(['/route',data.url]);
  }
  
  isSelected(list){
    return list.id===this.routeId;
  }

 

 
}
