import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../interfaces/perfil';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient,private storageservice:StorageService) { }


  public async getPerfil() {
    const headers = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${await this.getToken()}`
    };

    return new Promise<Perfil>((resolve, reject) => {
      this.http.get<Perfil>('http://practicastuds.ulp.edu.ar/api/Propietarios/', { headers })
        .subscribe(
          res => resolve(res), err => reject(err)
        );
    });
  }

  public async updatePerfil(perfil:Perfil,id: number)
  {
    const headers = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${await this.getToken()}`
    };

    return new Promise((resolve, reject) => {
      this.http.put(`http://practicastuds.ulp.edu.ar/api/Propietarios/${id}`,perfil, {headers,responseType: 'text'})
        .subscribe(
          res => resolve(res), err => reject(err)
        );
    });

  }



  private async getToken(): Promise<string> {
    return await this.storageservice.get('token');
  }

}
