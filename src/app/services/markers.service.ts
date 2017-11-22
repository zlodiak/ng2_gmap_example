import { Injectable } from '@angular/core';

import { Marker } from '../types/marker';


@Injectable()
export class MarkersService {

  constructor() { }

  getMarkers(): Marker[] {
  	return localStorage.markers ? JSON.parse(localStorage.markers) : {};
  };

  addMarker(lat, lng, id): void {
  	let markers = this.getMarkers();

	  markers[id] = {
	    lat: lat, 
	    lng: lng
	  };

	  //console.log(markers);

  	localStorage.markers = JSON.stringify(markers);
  };  

}
