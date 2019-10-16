import { Component, OnInit } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-service-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class ServiceEmployeeDetailComponent implements OnInit {

  public employeees = [];
  constructor(private _serviceEmployeeService : ServiceEmployeeService) { }

  ngOnInit() {
    this.employeees = this._serviceEmployeeService.getEmployeees();
  }


}
