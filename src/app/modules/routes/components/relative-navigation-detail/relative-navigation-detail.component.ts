import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relative-navigation-detail',
  templateUrl: './relative-navigation-detail.component.html',
  styleUrls: ['./relative-navigation-detail.component.css']
})
export class RelativeNavigationDetailComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  goToRelativeNavigation(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
