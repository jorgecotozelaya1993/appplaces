import { Component, OnInit } from '@angular/core';

// MANDO A LLAMAR MI SERVICIO DONDE TENGO LAS CONSULTAS
import { PlacesService } from './places.service';



@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  // LUGARES
  places = [];

  constructor(private placesService: PlacesService ) { }
  ngOnInit() {

    //LINEA PARA MANDAR A LLAMAR TODOS LOS LUGARES
    this.places = this.placesService.getPlaces();
    console.log(this.places);
  }

  ionViewWillEnter()
  {
    this.places = this.placesService.getPlaces();
  }


}
