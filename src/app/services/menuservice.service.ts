import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces/opcionesmenu';


@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor(private http : HttpClient) { }

  getOpcionesMenu(){
    return this.http.get<Menu[]>('/assets/menu/opcionesmenu.json');
  }
}
