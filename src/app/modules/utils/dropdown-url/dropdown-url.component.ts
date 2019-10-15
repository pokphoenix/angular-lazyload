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
