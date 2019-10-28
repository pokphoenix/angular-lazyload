import { Component, OnInit } from '@angular/core';
import UtilsService from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-basic-ng-for-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class BasicNgForEx4Component extends UtilsService implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
