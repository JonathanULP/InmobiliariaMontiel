import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/interfaces/inmuebles';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmuebles-create',
  templateUrl: './inmuebles-create.page.html',
  styleUrls: ['./inmuebles-create.page.scss'],
})
export class InmueblesCreatePage implements OnInit {

  constructor(private inmuebleservice: InmueblesService) { }


  inmueble: Inmueble =
  {
    direccion: '',
    superficie: 0,
    latitud: 0,
    longitud: 0,
    propietarioId: 3,
    grupoId: 3
  }

  ngOnInit() {

  }

  async createInmueble()
  {
    const respuesta = await this.inmuebleservice.createInmueble(this.inmueble)
                    .catch(
                      error => console.log(error)
                    );
  }

}
