import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class BasicIndexComponent implements OnInit {
  txt = "basic angular";
  
  constructor() { }

  ngOnInit() {
  }

}
