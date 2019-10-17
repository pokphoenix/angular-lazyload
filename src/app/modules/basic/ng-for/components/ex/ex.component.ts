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
    // this method will not work when
    // main layout and dynamic layout in the same page 
    // much change page it would work
  }

  ngOnInit() {
    // this for change value every time 
    this.route.paramMap.subscribe(params => {
      if (params.get("id")!=null)
        this.exId = parseInt(params.get("id")) ;
    });
  }

  onSelect(data){
    this.router.navigate(['/basic/ng-for/ex',data.id]);
  }

}
