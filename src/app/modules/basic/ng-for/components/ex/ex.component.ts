import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SidebarUtilsService } from 'src/app/services/utils/sidebar.service';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.css']
})
export class BasicNgForExComponent implements OnInit {

  exId:number = 0; 
  maxExId:number = 1;

  ngForExs:any = [];

 
  constructor(private router:Router
    ,private route:ActivatedRoute
    ,private _sidebarUtilsService : SidebarUtilsService
    ) {
    //this.exId = parseInt(this.route.snapshot.paramMap.get("id")); 
    // snapshot method will not work when navigate in the same component
    
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
    this.maxExId = i-1;

  }

  ngOnInit() {
    // this for change value every time if use same component
    this.route.paramMap.subscribe((params:ParamMap)=> {
      if (params.get("id")!=null)
        this.exId = parseInt(params.get("id")) ;
    });
  }

  onSelect(data){
    this.router.navigate(['/basic/ng-for/ex',data.id]);
  }
  goPrevious(){
    this.router.navigate(['/basic/ng-for/ex',this.exId-1<=0 ? 0 : this.exId-1 ]);
  }
  goNext(data){
    this.router.navigate(['/basic/ng-for/ex',this.exId+1 >= this.maxExId ? this.maxExId : this.exId+1  ]);
  }
  goMain(){
    this.router.navigate(['/basic/ng-for/ex',{id:this.exId,test:"pok test"}]);
  }

  isSelected(list){
    return list.id===this.exId;
  }

}
