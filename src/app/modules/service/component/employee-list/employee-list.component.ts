import { Component, OnInit, Input } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-service-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class ServiceEmployeeListComponent implements OnInit {

  @Input('parentEmployee') employeees ;
  constructor() { }

  ngOnInit() {
  }

}
