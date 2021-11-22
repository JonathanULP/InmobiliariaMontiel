import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Perfil } from 'src/app/interfaces/perfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private perfilservice:PerfilService,private alertController: AlertController ) { }

 perfil:Perfil = {

  nombre: '',
  email: '',
  clave: '',
  telefono: '',
  grupoId: 0,
  id: 0

 };

 ngOnInit() {
  this.getPerfil();
 }

 async getPerfil(){

  const datos : Perfil = await this.perfilservice.getPerfil();

    this.perfil = datos;
    this.perfil.clave = '';
 }


  updatePerfil()
  {

        this.perfilservice.updatePerfil(this.perfil,this.perfil.id)
        .then( () => this.presentAlert("Usuario actualizado correctamente","Éxito"))
        .catch(() => this.presentAlert("Error al actualizar usuario","Error"));
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
