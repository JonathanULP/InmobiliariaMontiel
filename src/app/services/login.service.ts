import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginView } from '../interfaces/loginView';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private storageservice: StorageService) { }

public login (credenciales:loginView):Promise<string>{
  const headers = {
    'Content-Type': 'application/json'
  };

  return new Promise<string>((resolve, reject) => {
    this.http.post('http://practicastuds.ulp.edu.ar/api/Propietarios/login',
     credenciales, { headers,responseType: 'text' })
      .subscribe(
       res => {
        this.storageservice.set('token', res);
        resolve(res)
       }, err => reject(err)
      );
  });
}


public async getPerfil(){
  const headers = {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${await this.getToken()}`
  };

  return new Promise((resolve, reject) => {
    this.http.get('http://practicastuds.ulp.edu.ar/api/Propietarios/', { headers })
      .subscribe(
        res => resolve(res), err => reject(err)
      );
  });
}

private async getToken(): Promise<string> {
  return await this.storageservice.get('token');
}
}
