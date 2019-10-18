import { ParamMap, ActivatedRoute, Router, NavigationEnd } from '@angular/router';

export default class UtilRoutes {
    static getCurrentUrlWithOutId(router:Router,id:any = 0):string{
        let max:number = router.url.split("/").length;
        let url = router.url.split(";")[0].split("/");
        let currentUrl = "";  
        for(let i = 1 ; i< max ; i++){
          if(i < max && id != url[i] ){
            currentUrl+="/"+url[i];
          }
          
        }
       return currentUrl;
    }
    static getCurrentUrlWithOutParamId(router:Router,route:ActivatedRoute):string{
        /*let navigateUrl = "";
        router.events.subscribe((val) => {
            if(val instanceof NavigationEnd){
                navigateUrl = val.url;
            }
        });*/

        let navigateUrl = router.url;
        let max:number = navigateUrl.split("/").length;
        let url = navigateUrl.split(";")[0].split("/");
        let currentUrl = "";  

        let paramId = "";
        route.paramMap.subscribe((params:ParamMap)=> {
            // console.log(`params.get("id") : ${params.get("id")}`);
            if (params.get("id")!=null){
                paramId = params.get("id") ;
            }
        });

        for(let i = 1 ; i< max ; i++){
          if(i < max && paramId != url[i] ){
            currentUrl+="/"+url[i];
          }
        }
        // console.log("navigateUrl : "+navigateUrl+" , currentUrl : "+currentUrl);
       return currentUrl;
    }

    static getCurrentRouteId(route:ActivatedRoute):number{
        

        /*
        //if original url is /route/param-map/10?name=aha

        route.params.forEach(s=>{
            console.log(s); //  from original url it show 10 
        })
        console.log("=====1");
        route.queryParams.forEach(s=>{
            console.log(s); // from original url it show name:aha
        })
        console.log("====2")
        route.url.forEach(s=>{   // this is urlSegment 
            s.forEach(i=>{
                console.log(i.path); // from orifinal url it will show [0] path: "param-map"  [1] path: "10"
            }); 
        })
        console.log("====3")
        route.parent.url.forEach(s=>{
            s.forEach(i=>{
                console.log(i.path);  // from orifinal url it will show route
            })
          
        })
        
        console.log("route.root : "+route.root);
        console.log("route.FirstChild  : "+route.firstChild );
        
        route.children.forEach(s => {
            console.log(s);
        });
        console.log("====4")
        console.log(route.routeConfig.pathMatch)
        */

        let resId = 0;
        route.paramMap.subscribe((params:ParamMap)=> {
            // console.log(`params.get("id") : ${params.get("id")}`);
            if (params.get("id")!=null){
                resId = parseInt(params.get("id")) ;
            }
        });
        return resId;
    }
}

/*
constructor(
private location: Location
) {}

goBack() {
this.location.back();
}*/ 