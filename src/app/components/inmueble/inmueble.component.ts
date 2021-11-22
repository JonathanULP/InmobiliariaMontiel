import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private inmuebleservice: InmueblesService,private alertController: AlertController,private router: Router) { }

  ngOnInit() {

  }


  async updateInmueble()
  {
    await this.inmuebleservice.updateInmueble(this.inmueble,this.inmueble.id)
    .then(() => this.presentAlertBasic('Inmueble actualizado satisfactoriamente','Éxito'))
    .catch(() => this.presentAlertBasic('Error al actualizar inmueble','Ups!'))

  }


  deleteInmueble()
  {
    this.presentAlert('¿Seguro desea eliminar este inmueble?','Advertencia','Eliminar',this.inmueble.id);
  }


    async presentAlert(message:string,header:string,text:string,id:number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      message,
      animated: true,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        },
        {
          text,
          handler: async () => {
            await this.inmuebleservice.deleteInmueble(id)
            .then( async () => {await this.presentAlertBasic('Inmueble eliminado correctamente','Éxito');
            setTimeout(function(){
              window.location.reload();
           }, 5000); })
            .catch(() => this.presentAlertBasic('Error al eliminar inmueble','Ups!'))
          }
        }

      ]
    });

    await alert.present();

  }

  async presentAlertBasic(message:string,header:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header,
      message,
      animated: true,
      buttons:['OK']
    });

    await alert.present();

  }

}
