import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';



@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent implements OnInit {

  urlLists:any = [];


  
  constructor(public router: Router,private _sidebarUtilsService : SidebarUtilsService) {
    this.urlLists = _sidebarUtilsService.getSidebarUrlByModule("form");
  }

  ngOnInit() {
    hello(this.router.url)
    
  }

  
   
}

function hello(url) {
  console.log('Hello!!!'+url);
}
