import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-table',
  templateUrl: './drag-and-drop-table.component.html',
  styleUrls: ['./drag-and-drop-table.component.css']
})
export class DragAndDropTableComponent implements OnInit {

  availableCars: Car[];

  selectedCars: Car[];

  draggedCar: Car;

  constructor() { }

  ngOnInit() {
    this.selectedCars = [];
    this.availableCars = this.getCarsSmall();
  }

  dragCarStart(event,car: Car) {
    console.log("dragStart",car);
    console.log(event.target.dataset.vin); //! get data-vin value 
    console.log(document.querySelectorAll("[data-vin='"+car.vin+"']"))  //! get element
    this.draggedCar = car;
  }

  dropCarToTable(event) {
      if(this.draggedCar) {
          let draggedCarIndex = this.findIndex(this.draggedCar,this.availableCars);
          this.selectedCars = [...this.selectedCars, this.draggedCar];
          this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
          this.draggedCar = null;
      }
  }

  dropCarToList(){
    if(this.draggedCar) {
      let draggedCarIndex = this.findIndex(this.draggedCar,this.selectedCars);
      this.availableCars = [...this.availableCars, this.draggedCar];
      this.selectedCars = this.selectedCars.filter((val,i) => i!=draggedCarIndex);
      this.draggedCar = null;
    }
  }

  dragCarEnd(event) {
      this.draggedCar = null;
  }

  findIndex(car: Car,list) {
      let index = -1;
      for(let i = 0; i < list.length; i++) {
          if(car.vin === list[i].vin) {
              index = i;
              break;
          }
      }
      return index;
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drag(e) {
      e.dataTransfer.setData('text', e.target.id);

  }

  drop(e) {
      e.preventDefault();
      const data = e.dataTransfer.getData('text');
      e.target.appendChild(document.getElementById(data));
  }


  getCarsSmall(){
    return [
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]
  }

}

interface Car {
  brand:string,
  year:number,
  color:string,
  vin:string 

}