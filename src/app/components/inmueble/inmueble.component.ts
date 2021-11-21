import { Component, Input, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/interfaces/inmuebles';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.scss'],
})
export class InmuebleComponent implements OnInit {

  @Input() inmueble: Inmueble;

  constructor() { }

  ngOnInit() {}

}
