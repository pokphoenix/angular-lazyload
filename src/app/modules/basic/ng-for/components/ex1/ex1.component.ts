import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class NgForEx1Component implements OnInit {

  colors = ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
