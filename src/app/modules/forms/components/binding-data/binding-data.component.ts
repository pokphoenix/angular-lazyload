import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-data',
  templateUrl: './binding-data.component.html',
  styleUrls: ['./binding-data.component.css']
})
export class FormBindingDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ConvertToInt(val) {
      return parseInt(val);
  }

}
