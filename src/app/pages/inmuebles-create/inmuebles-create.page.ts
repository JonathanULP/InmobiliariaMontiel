import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Inmueble } from 'src/app/interfaces/inmuebles';
import { Perfil } from 'src/app/interfaces/perfil';
import { InmueblesService } from 'src/app/services/inmuebles.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-inmuebles-create',
  templateUrl: './inmuebles-create.page.html',
  styleUrls: ['./inmuebles-create.page.scss'],
})
export class InmueblesCreatePage implements OnInit {

  constructor(private inmuebleservice: InmueblesService,private alertController: AlertController,private router:Router,private perfilservice: PerfilService) { }


  inmueble: Inmueble =
  {
    direccion: '',
    superficie: null,
    latitud: null,
    longitud: null,
    propietarioId: null,
    grupoId: null
  }

  ngOnInit() {

  }

  async getDatosUsuarioActual()
  {
    const data: Perfil = await this.perfilservice.getPerfil();
    this.inmueble.propietarioId = data.id;
    this.inmueble.grupoId = data.grupoId;
  }

  async createInmueble()
  {
    console.log(this.inmueble);
    await this.getDatosUsuarioActual();
    const respuesta = await this.inmuebleservice.createInmueble(this.inmueble)
                    .then(() => {this.presentAlert('Inmueble creado con éxito','Éxito')
                                 this.router.navigate(['/inmuebles']) })
                    .catch(() => this.presentAlert('Error al crear un inmueble','Ups!'))
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
