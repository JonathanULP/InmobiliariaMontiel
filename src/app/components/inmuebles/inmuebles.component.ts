import { Component, Input, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/interfaces/inmuebles';

@Component({
  selector: 'app-inmuebles-component',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.scss'],
})
export class InmueblesComponent implements OnInit {

  @Input() inmuebles: Inmueble[] = [];
  constructor() { }

  ngOnInit() {}

}
