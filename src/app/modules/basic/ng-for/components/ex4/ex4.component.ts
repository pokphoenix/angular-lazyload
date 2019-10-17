import { Component, OnInit } from '@angular/core';
import Utils from 'src/app/services/utils/utils';

@Component({
  selector: 'app-basic-ng-for-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class BasicNgForEx4Component extends Utils implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
