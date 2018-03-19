import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number = 15;

  constructor() {
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    }
  }

  setPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
 }
}
