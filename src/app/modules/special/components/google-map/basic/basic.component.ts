import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class GoogleBasicComponent implements OnInit {

  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;

  constructor() { }

  ngOnInit() {
    this.renderMap();
  }

  renderMap() {
    
    window['initMap'] = () => {
      this.loadMap();      
    }

    if(!window.document.getElementById('google-map-script')) {
      // this code for add <script> to html   
      // in angular can not insert script in component.html
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8rs2jAMbGwdQG_aoX6oOFa1SpnEz3T5o&callback=initMap";
      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 24.5373, lng: 81.3042},
      zoom: 8
    });
    
    var marker = new window['google'].maps.Marker({
      position: {lat: 24.5373, lng: 81.3042},
      map: map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });
    
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
    '<div id="bodyContent">'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
    '</div>'+
    '</div>';
    
    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });
    
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    
  }

}

