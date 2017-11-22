import { Component, OnInit } from '@angular/core';

import { MarkersService } from './services/markers.service';
import { MarkerInfoComponent } from './dialogs/marker-info/marker-info.component';
import { MatDialog } from '@angular/material';
//import { Marker } from './types/marker';

declare var google: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private map: any;

	constructor(private markersService: MarkersService, 
							private matDialog: MatDialog) { }
  
	ngOnInit() {
		this.initMap();

		console.log(this.matDialog);

		/*this.matDialog.open(MarkerInfoComponent, {
		  hasBackdrop: true,
		  data: { title: 'Ошибка!', message: 'Не все обязательные поля заполнены.' }
		});	*/	
	}

	private initMap(): void {
		let mapEl = document.getElementById('map');
		let mapOptions = {
			center: new google.maps.LatLng(51, 7),
			zoom: 8
		};
		this.map = new google.maps.Map(mapEl, mapOptions);

		google.maps.event.addListener(this.map, 'click', (e) => {
			//console.log(e);
	    let lat = e.latLng.lat();
	    let lng = e.latLng.lng();    
	    let id = 'id_' + Date.now() + lat.toFixed(2) + lng.toFixed(2);
	    this.generateMarker(lat, lng, id);    			
		});		

		this.renderMarkers();
	};

	private renderMarkers(): void {
		let markers = this.markersService.getMarkers();

	  for(let id in markers) {
	  	if (!markers.hasOwnProperty(id)) continue;
	    this.generateMarker(markers[id]['lat'], markers[id]['lng'], id);
	  };

	};

	private generateMarker(lat, lng, id): void {
	  let marker = new google.maps.Marker({
	  	id: id,
	    position: {lat: lat, lng: lng},
	    map: this.map,
	    title: 'this is title',
	    balloonText: '',
	    balloonClose: true,
	    hintText: ''
	  }); 

	  this.markersService.addMarker(lat, lng, id);

		google.maps.event.addListener(marker, 'rightclick', (e) => {
			//console.log(marker.id);   

			//console.log(this.matDialog);
		});			  
	};

}
