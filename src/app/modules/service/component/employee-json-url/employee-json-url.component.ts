import { Component, OnInit } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-json-url',
  templateUrl: './employee-json-url.component.html',
  styleUrls: ['./employee-json-url.component.css']
})
export class ServiceEmployeeJsonUrlComponent implements OnInit {

  employeees = [];
  constructor(private _serviceEmployeeService : ServiceEmployeeService) { }

  ngOnInit() {
    this._serviceEmployeeService.getEmployeeesUrl().subscribe(data=> this.employeees=data);
  }

}
