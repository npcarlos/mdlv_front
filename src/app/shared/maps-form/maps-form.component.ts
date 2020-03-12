import { Component, OnInit, ViewChild, ElementRef, AfterContentInit  } from '@angular/core';


declare var google;

@Component({
  selector: 'app-maps-form',
  templateUrl: './maps-form.component.html',
  styleUrls: ['./maps-form.component.scss'],
})
export class MapsFormComponent implements OnInit {

  
  // Map related
  @ViewChild('map', {static:false}) mapElement: ElementRef;
  map: any;
  markers = [];

  // Misc
  isTracking = false;
  watch: string;
  user = null;


  constructor() { }

  ngOnInit() {
    //this.loadMap();
  }
  ngAfterContentInit() {
    //this.loadMap();
    console.log("Google");
    console.log(google);
    console.log(JSON.stringify(new google.maps.LatLng(4.686822, -74.056792)));
    //this.loadMap();
  }

  // Initialize a blank map
  loadMap() {
    let latLng = new google.maps.LatLng(4.686822, -74.056792);
 
    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  
  // Redraw all markers on the map
  updateMap(locations) {
    // Remove all current marker
    this.markers.map(marker => marker.setMap(null));
    this.markers = [];
  
    for (let loc of locations) {
      let latLng = new google.maps.LatLng(loc.lat, loc.lng);
  
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
      this.markers.push(marker);
    }
  }
}
