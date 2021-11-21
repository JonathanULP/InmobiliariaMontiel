import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginView } from 'src/app/interfaces/loginView';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginservice: LoginService, private router:Router) { }

  public usuario : loginView = {
    Usuario : '',
    Clave : ''
  };
  ngOnInit() {
  }


  async entrar()
  {
    const token = await this.loginservice.login(this.usuario).catch(error => {
      console.log(error);
    });
    if(!token)
    {
      return
    }
    else{

      const perfil = await this.loginservice.getPerfil().catch(error => {
        console.log(error);
      });
      this.router.navigate(['/mapa']);
      console.log(perfil);
    }
  }

}
