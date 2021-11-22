import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
     HeaderComponent,
     MenuComponent,
     InmuebleComponent,
     InmueblesComponent

    ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    InmuebleComponent,
    InmueblesComponent
  ]
})
export class ComponentModule { }
