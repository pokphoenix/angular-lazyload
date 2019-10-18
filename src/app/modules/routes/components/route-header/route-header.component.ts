import { Component, OnInit, Input } from '@angular/core';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';

@Component({
  selector: 'app-route-header',
  templateUrl: './route-header.component.html',
  styleUrls: ['./route-header.component.css']
})
export class RouteHeaderComponent implements OnInit {
  urlLists:any = [];
  @Input() currentUrl;
  constructor(private _sidebarUtilsService : SidebarUtilsService) {
    this.urlLists = _sidebarUtilsService.getSidebarUrlByModule("route");
  }


  ngOnInit() {
  }

}
