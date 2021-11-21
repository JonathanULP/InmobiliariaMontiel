import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/opcionesmenu';
import { MenuserviceService } from 'src/app/services/menuservice.service';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  opciones:Observable<Menu[]>

  constructor(private serviciomenu : MenuserviceService) { }

  ngOnInit() {
    this.opciones = this.serviciomenu.getOpcionesMenu();
  }

}
