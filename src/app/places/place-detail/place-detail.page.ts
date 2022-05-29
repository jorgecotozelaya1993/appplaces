import { Component, OnInit } from '@angular/core';

//IMPORTO LA ROUTA
import { Router } from '@angular/router';

//IMPORTO EL SERVICIO
import { PlacesService } from '../places.service';

//IMPORTO EL MODELO DE LOS ATRIBUTOS DE LOS LUGARES
import {Place} from './../place.model';

//IMPORTO LOS ID
import { ActivatedRoute } from '@angular/router';

//IMPORTO LOS MENSAJES DE ALERTA
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  //IMPORTAR EL LLAMADO DE LA INTERFAZ
  place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const mostrarid = paramMap.get('placeId');
      this.place = this.placesService.getPlace(mostrarid);
      console.log(this.place);

      //MOSTRAR SOLO EL ID DEL LUGAR EN LA CONSOLA
      console.log(mostrarid);
    });
  }

  //async deletePlace(){
      //CODIGO PARA EL MENSAJE DE ALERTA
      //this.placesService.deletePlace(this.place.id);
      //this.router.navigate(['/places']);
  //}


  //METODO PARA ELIMINAR
  async deletePlace(){
    //console.log('Lugar Eliminado');
    //Codigo para agregar mensajes de Alerta PRIMERO IMPORTO LA LIBRERIA.
    const alertElement = await this.alertCtrl.create({
    header: 'Estas seguro que deseas eliminar se cuidadoso!',
    message: 'Eliminar un lugar',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
      text: 'Eliminar',
      handler: () => {
        this.placesService.deletePlace(this.place.id);
        this.router.navigate(['/places']);
      }
      }
    ]
  });

  await alertElement.present();
    //this.placesService.deletePlace(this.place.id);
    //this.router.navigate(['/places']);
    //this.router.navigateByUrl("/places");
    }




}
