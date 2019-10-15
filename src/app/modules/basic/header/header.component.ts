import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  urlLists:any = [
    {
      'url': '/basic/index',
      'text': 'Basic'
    },
    {
      'url': '/basic/ng-switch',
      'text': 'Ng Switch'
    },
    {
      'url': '/basic/ng-for/ex1',
      'text': 'Ng For Ex.1'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
