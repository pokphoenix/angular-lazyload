import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-ng-for-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class BasicNgForEx1Component implements OnInit {

  colors = ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
