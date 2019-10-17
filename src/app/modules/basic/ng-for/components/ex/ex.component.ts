import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class BasicNgForExComponent implements OnInit {

  exId:number = 0; 

  ngForExs:any = [];

 
  constructor(private router:Router
    ,private route:ActivatedRoute
    ,private _sidebarUtilsService : SidebarUtilsService
    ) {
    //this.exId = parseInt(this.route.snapshot.paramMap.get("id")); 
    // this method will not work when
    // main layout and dynamic layout in the same page 
    // much change page it would work

    let datas = _sidebarUtilsService.getSidebarUrlByModule("basic");
    let i = 1;
    for (const data of datas) {
      if(data.url.indexOf("/ng-for/ex/")!=-1){
        this.ngForExs.push({
            id: i , 
            name: data.text
        });
        i++;
      }
    }

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
