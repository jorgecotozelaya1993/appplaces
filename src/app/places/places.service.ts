import { Injectable } from '@angular/core';

//LLAMAR EL MODULO DE LOS ATRIBUTOS DE LOS LUGARES
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


   //CREANDO LA PRIMER APP DE LUGARES
   private places: Place[] = [
    {
      id: '1',
      title: ' Francia Torre Eiffel',
      imageURL: 'https://i.blogs.es/c4c496/torre_eiffel/1366_2000.jpg',
      comments: ['Lugar Fenomenal', 'Hermoso lugar', 'Fantastico', 'Mi lugar preferiso']

    },
    {
      id: '2',
      title: ' El Salvador Playas de Surf City',
      imageURL: 'https://noticiasya.com/wp-content/uploads/sites/3/2021/03/image00022.jpeg',
      comments: ['Playas Hermosas']

    },
    {
      id: '3',
      title: ' Honduras Isla de Roatan',
      imageURL: 'https://viajerosocultos.com/wp-content/uploads/2021/08/sunset-landscape-of-west-end-beach-roatan-island-honduras.jpg',
      comments: []

    }

  ];

  constructor() { }

  //CONSULTAR TODOS LOS LUGARES
  getPlaces(): Place[] { return [...this.places]; }

  //OBTENER UN SOLO LUGAR
  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
   }

  //AGREGAR UN LUGAR
  addPlace(){ }

  //ELIMINAR UN LUGAR
  deletePlace(placeId: string)
  {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }


}
