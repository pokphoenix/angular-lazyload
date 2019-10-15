import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent implements OnInit {

  urlLists:any = [
    {
      'url': '/form/normal',
      'text': 'Form Normal'
    },
    {
      'url': '/form/template-driven',
      'text': 'Form template driven'
    }
  ];


  constructor(public router: Router) { }

  ngOnInit() {
    hello(this.router.url)
    
  }

  
   
}

function hello(url) {
  console.log('Hello!!!'+url);
}
