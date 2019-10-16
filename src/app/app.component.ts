import { Component, OnInit } from '@angular/core';
import { SidebarUtilsService } from './services/utils/sidebar.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tutorial';
  sidebars = [];

  constructor(public router: Router,private _sidebarUtilsService : SidebarUtilsService){
    this.sidebars = _sidebarUtilsService.getSidebarUrl();   
  }
  
  ngOnInit() {
    $(function(){
      $(".ul-parent").on("click",function(){
        $(this).closest(".row-ul").find(".ul-child").toggle();
        let open = ($(this).closest(".row-ul").find(".fa-chevron-down").length>0);
        if(open){
          $(this).closest(".row-ul").find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-left");
        }else{
          $(this).closest(".row-ul").find(".fa-chevron-left").addClass("fa-chevron-down").removeClass("fa-chevron-left");
        }
      });
    })

    
    
  }

}
