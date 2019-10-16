import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-data-sharing-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class BasicDataSharingParentChildComponent implements OnInit {
  name = "pokaha" ;
  message = "";
  
  
  
  constructor() { }

  ngOnInit() {
  }

}
