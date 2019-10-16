import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-data-sharing-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class BasicDataSharingIndexComponent implements OnInit {

  @Input('parentData') name ;
  @Output() public childEvent = new EventEmitter();

  constructor(public router: Router ) { }

  ngOnInit() {
  }

  fireEvent(txt){
    if (txt==""||txt==null) txt="Hello world"
    this.childEvent.emit(txt);
  }

}
