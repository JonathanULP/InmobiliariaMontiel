import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Inmueble } from 'src/app/interfaces/inmuebles';
import { InmueblesService } from 'src/app/services/inmuebles.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.page.html',
  styleUrls: ['./inmuebles.page.scss'],
})
export class InmueblesPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private inmuebleservice: InmueblesService,private router: Router) {  }

  inmuebles: Inmueble[] =[];

  ngOnInit() {
      this.getInmuebles();
  }

   async getInmuebles()
  {
   await this.inmuebleservice.getInmuebles().then
   (resp => {
      this.inmuebles.push(...resp);
   });

  }

  loadData(event)
  {
    const largo = this.inmuebles.length;

    setTimeout(() => {
      event.target.complete();

      if (this.inmuebles.length == largo) {
        event.target.disabled = true;
      }
    }
    , 2500);
  }

}
