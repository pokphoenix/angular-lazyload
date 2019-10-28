import { Component, OnInit } from '@angular/core';
import { SidebarUtilsService } from './services/utils/sidebar.service';
import { Router } from '@angular/router';
import UtilsService from './services/utils/utils.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UtilsService implements OnInit {
  title = 'Tutorial';
  sidebars = [];

  constructor(public router: Router,private _sidebarUtilsService : SidebarUtilsService){
    super();
    this.sidebars = _sidebarUtilsService.getSidebarUrl();   
  }
  
  ngOnInit() {
    $(function(){
      $(".ul-parent").on("click",function(){
        $(this).siblings(".ul-child").toggle();
        
        // .closest(".row-ul").closest(".ul-child").toggle();
        let open = ($(this).find(".fa-chevron-down").length>0);
        if(open){
          $(this).find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-left");
        }else{
          $(this).find(".fa-chevron-left").addClass("fa-chevron-down").removeClass("fa-chevron-left");
        }
      });
    })

    let {quotient,remainder}=this.intDiv(10,3) // 3 1
    console.log(quotient,remainder);
  }

  
  intDiv(dividend:number, divisor:number)  {
    let quotient = dividend / divisor ;
    let remainder = dividend % divisor ;
    return {quotient,remainder}  ;
  }
  
}
