import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmueblesCreatePage } from './inmuebles-create.page';

const routes: Routes = [
  {
    path: '',
    component: InmueblesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmueblesCreatePageRoutingModule {}
