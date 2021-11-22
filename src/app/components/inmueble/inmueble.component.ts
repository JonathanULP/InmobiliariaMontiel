import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Inmueble } from 'src/app/interfaces/inmuebles';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.scss'],
})
export class InmuebleComponent implements OnInit {


  @Input() inmueble: Inmueble;


  constructor(private inmuebleservice: InmueblesService,private alertController: AlertController) { }

  ngOnInit() {

  }


  async updateInmueble()
  {
    await this.inmuebleservice.updateInmueble(this.inmueble,this.inmueble.id)
    .then(() => this.presentAlert('Inmueble actualizado satisfactoriamente','Éxito'))
    .catch(() => this.presentAlert('Error al actualizar inmueble','Ups!'))

  }


    async presentAlert(message:string,header:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      message,
      animated: true,
      buttons: ['OK']
    });

    await alert.present();

  }

}
