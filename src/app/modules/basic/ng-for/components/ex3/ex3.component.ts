import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng-for-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class BasicNgForEx3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  makeArray(i: number) {
    return new Array(i);
  }

}
