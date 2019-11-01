import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/models/user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class BasicIndexComponent implements OnInit {
  txt = "basiC Angular";
  
  person: UserModel = new UserModel();

  numberA: number = 10;    
  numberB: number = 20;    

  date = new Date();

  constructor() { }

  ngOnInit() {
    this.person.defaultValue("pok","aha","pokphoenix@gmail.com");
  }

}
