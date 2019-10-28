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
  currentUrl="";  
  
  constructor(public router: Router ,private route:ActivatedRoute) {
    // console.log("DropdownUrlComponent constructor");
  }

  ngOnInit() {
    // console.log("DropdownUrlComponent ngOnInit parentBaseUrl : "+this.parentBaseUrl);
    if(this.parentBaseUrl==""||this.parentBaseUrl==null){
      this.getCurrentUrl(this.router,this.route);
    }else{
      let url = UtilRoutes.getCurrentUrlWithOutParamId(this.router,this.route);
      this.currentUrl = this.parentBaseUrl;
    }

    $(function(){
      $("#headerTitle").text($("#form_url option:selected").text());
    })
  }

  getCurrentUrl(router:Router,route:ActivatedRoute){
    let navigateUrl = router.url;
    this.currentUrl = navigateUrl;
   


    // console.log("getCurrentUrl "+this.currentUrl+" , "+this.breadcrumbs );
    // let max:number = navigateUrl.split("/").length;
    // let url = navigateUrl.split(";")[0].split("/");
    let currentUrl="";
    route.paramMap.subscribe((params:ParamMap)=> {
        // console.log(`params.get("id") : ${params.get("id")}`);
        currentUrl = router.url;
        if(this.parentBaseUrl==""){ 
          this.currentUrl = currentUrl;
        }
    });
  }


  onChangeGotoNavigate(val){
    this.router.navigate([val]);
  }
 

}
