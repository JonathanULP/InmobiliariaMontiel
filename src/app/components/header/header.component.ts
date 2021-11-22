import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() nombre: string = '';
  @Input() show: boolean = true;
  constructor(private menuController: MenuController) { }

  ngOnInit() {}

  toggle()
  {
  this.menuController.toggle();
 }

}
