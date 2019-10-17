import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class BasicNgForExComponent implements OnInit {

  exId:number = 0; 

  ngForExs:any = [
    { id : 1 ,name :'NgFor Ex.1'},
    { id : 2 ,name :'NgFor Ex.2'},
    { id : 3 ,name :'NgFor Ex.3'}
  ];

  constructor(private router:Router,private route:ActivatedRoute) {
    //this.exId = parseInt(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.exId = parseInt(params.get("id")) ;
    });
  }

  onSelect(data){
    this.router.navigate(['/basic/ng-for/ex',data.id]);
  }

}
