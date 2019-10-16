import { Component, OnInit, Input } from '@angular/core';
import { ServiceEmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-service-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class ServiceEmployeeDetailComponent implements OnInit {

  @Input('parentEmployee') employeees ;
  constructor(private _serviceEmployeeService : ServiceEmployeeService) { }

  ngOnInit() {
    
  }


}
