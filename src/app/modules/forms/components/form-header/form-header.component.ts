import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent implements OnInit {

  formUrlLists:any = [
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
    $(function(){
      $("#headerTitle").text($("#form_url option:selected").text());
    })
  }

  onChangeGotoNavigate(val){
    this.router.navigate([val]);
  }
   
}
