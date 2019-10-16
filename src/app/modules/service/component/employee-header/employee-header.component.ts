import { Component, OnInit } from '@angular/core';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';

@Component({
  selector: 'app-service-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  urlLists:any = [];

  constructor(private _sidebarUtilsService : SidebarUtilsService) {
    this.urlLists = _sidebarUtilsService.getSidebarUrlByModule("service");
  }

  ngOnInit() {
  }

}
