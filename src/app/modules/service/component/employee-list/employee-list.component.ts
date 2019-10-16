import { Component, OnInit } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-service-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class ServiceEmployeeListComponent implements OnInit {

  public employeees = [];
  constructor(private _serviceEmployeeService : ServiceEmployeeService) { }

  ngOnInit() {
    this.employeees = this._serviceEmployeeService.getEmployeees();
    console.log(this._serviceEmployeeService.getEmployeees());
  }

}
