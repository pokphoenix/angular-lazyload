import { Component, OnInit } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class ServiceEmployeeIndexComponent implements OnInit {

  employeees = [];
  constructor(private _serviceEmployeeService : ServiceEmployeeService) { }

  ngOnInit() {
    this.employeees =  this._serviceEmployeeService.getEmployeees();
  }

}
