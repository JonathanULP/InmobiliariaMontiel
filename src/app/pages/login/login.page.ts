import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { loginView } from 'src/app/interfaces/loginView';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginservice: LoginService, private router:Router,private menuController: MenuController,private alertController: AlertController) { }

  public usuario : loginView = {
    Usuario : '',
    Clave : ''
  };
  ngOnInit() {
    this.menuController.enable(false,'principal');
  }


  async entrar()
  {
    const token = await this.loginservice.login(this.usuario).catch(error => {
      this.presentAlert("Usuario o Contraseña incorrecto","Ups!");
    });
    if(!token)
    {
      return
    }
    else{
      this.router.navigate(['/inmuebles']);
    }
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
