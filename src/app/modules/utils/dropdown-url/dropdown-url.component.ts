import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-dropdown-url',
  templateUrl: './dropdown-url.component.html',
  styleUrls: ['./dropdown-url.component.css']
})
export class DropdownUrlComponent implements OnInit {

  @Input() formUrlLists = {};

  breadcrumbs = [];

  

  constructor(public router: Router) { }

  ngOnInit() {

    this.breadcrumbs = this.router.url.split('/');
    $(function(){
      $("#headerTitle").text($("#form_url option:selected").text());
    })
  }

  onChangeGotoNavigate(val){
    this.router.navigate([val]);
  }
  getBreadcrumbsUrl(loop:number){
    loop++;
    let txt:string = "";  
    for(let i=1;i<=loop;i++){
        txt += "/"+this.breadcrumbs[i];
    }
    return txt;  
  }

}
