import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class BasicLifeCycleComponent implements OnInit {

  totalCount:number = 0;
  countDoCheck:number = 0;
  afterContentChecked:number = 0;
  afterViewChecked:number = 0;
  disabledInput:boolean = false;
  
  constructor() { }

 
  ngOnChanges() {
    console.log("call  ngOnChanges")
    this.totalCount++;
  }

  ngOnInit() {
    console.log("call  ngOnInit")
    this.totalCount++;
  }

  //Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
  ngDoCheck(){
    this.totalCount++;
    this.countDoCheck++;
    console.log("call  ngDoCheck totalCount : "+this.totalCount ,"countDoCheck : "+this.countDoCheck);
  }

  //Called once after the first ngDoCheck().
  ngAfterContentInit(){
    console.log("call  ngAfterContentInit")
    this.totalCount++;
  }

  //Called after the ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked(){
    this.totalCount++;
    this.afterContentChecked++;
    console.log("call  ngAfterContentChecked totalCount : "+this.totalCount ,"afterContentChecked : "+this.afterContentChecked);
  }

  //Called once after the first ngAfterContentChecked().
  ngAfterViewInit(){
    console.log("call  ngAfterViewInit")
    this.totalCount++;
  }

  //Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  ngAfterViewChecked(){
    this.totalCount++;
    this.afterViewChecked++;
    console.log("call  ngAfterViewChecked totalCount : "+this.totalCount ,"afterContentChecked : "+this.afterViewChecked);
  }

  //Called just before Angular destroys the directive/component.
  ngOnDestroy(){
    console.log("call  ngOnDestroy")
    this.totalCount++;
  }

  doTestClick(){
    this.disabledInput = !this.disabledInput;
  }

  doTestChange(){
    var e = document.createElement('p');
    e.innerHTML = "doTestChange";
    document.getElementById("console").appendChild(e);
    
  }
}
