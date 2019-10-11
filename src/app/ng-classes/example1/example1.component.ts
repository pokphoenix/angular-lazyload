import { Component, OnInit } from '@angular/core';
import NgClassSingerModel from 'src/app/ng-classes/model/single.model';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  singers: NgClassSingerModel[] = [
    {
   'artist': 'Michael Jackson',
   'country': 'USA'
 },
 {
   'artist': 'Justin Bieber',
   'country': 'Canada'
 },
 {
   'artist': 'Daddy Yankee',
   'country': 'Purto Rico'
 },
 {
    'artist': 'A R Rehman',
     'country': 'India'
 },
 {
     'artist': 'Selena Gomez',
     'country': 'USA'
 }
];


  constructor() { }

  ngOnInit() {
  }

}
