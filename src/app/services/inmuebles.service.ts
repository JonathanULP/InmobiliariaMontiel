import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inmueble } from '../interfaces/inmuebles';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {

  constructor(private storageservice: StorageService, private http: HttpClient) { }



  public async getInmuebles()
  {
    const headers =
    {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${ await this.getToken()}`
    }

    return new Promise<Inmueble[]>((resolve, reject) =>{
      this.http.get<Inmueble[]>('http://practicastuds.ulp.edu.ar/api/Inmuebles/0', {headers}) .subscribe(
        res => resolve(res), err => reject(err)
      );
    });
  }


  public async createInmueble(inmueble:Inmueble)
  {
    const headers =
    {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${ await this.getToken()}`
    }
    return new Promise<Inmueble>((resolve,reject)=>{
      this.http.post('http://practicastuds.ulp.edu.ar/api/Inmuebles',inmueble,{headers})
      .subscribe(
        res => resolve(res), err => reject(err)
      );
    });
  }

  public async updateInmueble(inmueble:Inmueble,id: number)
  {
    const headers =
    {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${ await this.getToken()}`
    }

    return new Promise((resolve,reject)=>{
      this.http.put<Inmueble>(`http://practicastuds.ulp.edu.ar/api/Inmuebles/${id}`,inmueble,{headers})
      .subscribe(
        res => resolve(res), err => reject(err)
      );
    });
  }

  public async deleteInmueble(id:number)
  {
    const headers =
    {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${ await this.getToken()}`
    }

    return new Promise((resolve,reject)=>{
      this.http.delete(`http://practicastuds.ulp.edu.ar/api/Inmuebles/${id}`,{headers})
      .subscribe(
        res => resolve(res), err => reject(err)
      );
    });
  }


  private async getToken(): Promise<string> {
    return await this.storageservice.get('token');
  }
}
