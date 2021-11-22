import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmueblesCreatePageRoutingModule } from './inmuebles-create-routing.module';

import { InmueblesCreatePage } from './inmuebles-create.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmueblesCreatePageRoutingModule,
    ComponentModule
  ],
  declarations: [InmueblesCreatePage]
})
export class InmueblesCreatePageModule {}
