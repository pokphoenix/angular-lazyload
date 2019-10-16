import { Component, OnInit } from '@angular/core';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';

@Component({
  selector: 'app-basic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urlLists:any = [];


  constructor(private _sidebarUtilsService : SidebarUtilsService) {
    this.urlLists = _sidebarUtilsService.getSidebarUrlByModule("basic");
  }

  ngOnInit() {
  }

}
