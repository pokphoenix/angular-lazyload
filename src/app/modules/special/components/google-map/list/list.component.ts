import { Component, OnInit } from '@angular/core';
import UtilsService from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class GoogleMapListComponent  extends UtilsService implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }

}
