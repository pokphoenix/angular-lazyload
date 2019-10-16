import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  urlLists:any = [
    {
      'url': '/service/employee',
      'text': 'Service Employee Index'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
