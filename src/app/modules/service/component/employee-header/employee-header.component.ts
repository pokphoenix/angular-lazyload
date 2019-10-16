import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrls: ['./employee-header.component.css']
})
export class EmployeeHeaderComponent implements OnInit {

  urlLists:any = [
    {
      'url': '/service/employee-normal',
      'text': 'Service Employee Normal'
    },
    {
      'url': '/service/employee-json',
      'text': 'Service Employee Json'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
