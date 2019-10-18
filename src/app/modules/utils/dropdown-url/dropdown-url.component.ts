import { Component, OnInit, Input, OnChanges, AfterContentInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ParamMap } from '@angular/router';
import UtilRoutes from 'src/app/services/utils/routes';

declare var $: any;

@Component({
  selector: 'app-dropdown-url',
  templateUrl: './dropdown-url.component.html',
  styleUrls: ['./dropdown-url.component.css']
})
export class DropdownUrlComponent implements OnInit {

  @Input() parentBaseUrl = "";
  @Input() formUrlLists = {};

  breadcrumbs = [];
  currentUrl="";  
  
  constructor(public router: Router ,private route:ActivatedRoute,@Inject('BASE_URL') baseUrl: string) {
    // console.log("DropdownUrlComponent constructor");
    console.log("baseUrl : "+baseUrl);
  }

  ngOnInit() {
    // console.log("DropdownUrlComponent ngOnInit parentBaseUrl : "+this.parentBaseUrl);
    if(this.parentBaseUrl==""||this.parentBaseUrl==null){
      this.getCurrentUrl(this.router,this.route);
    }else{
      let url = UtilRoutes.getCurrentUrlWithOutParamId(this.router,this.route);
      this.currentUrl = this.parentBaseUrl;
      this.breadcrumbs = url.split(';')[0].split("/");
    }

    $(function(){
      $("#headerTitle").text($("#form_url option:selected").text());
    })
  }

  getCurrentUrl(router:Router,route:ActivatedRoute){
    let navigateUrl = router.url;
    this.currentUrl = navigateUrl;
    this.breadcrumbs = navigateUrl.split(';')[0].split("/");


    // console.log("getCurrentUrl "+this.currentUrl+" , "+this.breadcrumbs );
    // let max:number = navigateUrl.split("/").length;
    // let url = navigateUrl.split(";")[0].split("/");
    let currentUrl="";
    route.paramMap.subscribe((params:ParamMap)=> {
        // console.log(`params.get("id") : ${params.get("id")}`);
        currentUrl = router.url;
        if(this.parentBaseUrl==""){ 
          this.currentUrl = currentUrl;
          this.breadcrumbs = currentUrl.split(';')[0].split("/");
        }
    });
  }


  onChangeGotoNavigate(val){
    this.router.navigate([val]);
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
