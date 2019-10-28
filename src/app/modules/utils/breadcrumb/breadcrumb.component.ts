import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import UtilRoutes from 'src/app/services/utils/routes';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() parentBaseUrl = "";
  @Input() formUrlLists = {};

  breadcrumbs = [];
  constructor(public router: Router ,private route:ActivatedRoute,@Inject('BASE_URL') baseUrl: string) {
    // console.log("DropdownUrlComponent constructor");
    console.log("baseUrl : "+baseUrl);
  }

  ngOnInit() {
    if(this.parentBaseUrl==""||this.parentBaseUrl==null){
      this.getCurrentUrl(this.router,this.route);
    }else{
      let url = UtilRoutes.getCurrentUrlWithOutParamId(this.router,this.route);
      this.breadcrumbs = url.split(';')[0].split("/");
    }
  }

  getCurrentUrl(router:Router,route:ActivatedRoute){
    let navigateUrl = router.url;
    this.breadcrumbs = navigateUrl.split(';')[0].split("/");
    let currentUrl="";
    route.paramMap.subscribe((params:ParamMap)=> {
        currentUrl = router.url;
        if(this.parentBaseUrl==""){ 
          this.breadcrumbs = currentUrl.split(';')[0].split("/");
        }
    });
  }

  getBreadcrumbsUrl(loop:number){
    loop++;
    let txt:string = "";  
    for(let i=1;i<=loop;i++){
        txt += "/"+this.breadcrumbs[i];
    }
    return txt;  
  }

}
