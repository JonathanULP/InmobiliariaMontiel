import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

declare var mapboxgl : any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit,AfterViewInit
 {

  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  toggleMenu()
  {
    this.menuController.toggle();
  }

  ngAfterViewInit() :void
  {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRoYW4xMjE4IiwiYSI6ImNrdnU3MXp5NDNwa3oybm10aDY5NnNha24ifQ.H7AY0JkIoL98JFbO-ubK5Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    pitch: 75,
    center: [-66.31252659628312,-33.18440094418022],
    zoom: 15.5

    });


    map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
      (layer) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;


      map.addLayer(
      {
      'id': 'add-3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
      'fill-extrusion-color': '#aaa',


      'fill-extrusion-height': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'height']
      ],
      'fill-extrusion-base': [
      'interpolate',
      ['linear'],
      ['zoom'],
      15,
      0,
      15.05,
      ['get', 'min_height']
      ],
      'fill-extrusion-opacity': 0.6
      }
      },
      labelLayerId
      );
      });

      const marker = new mapboxgl.Marker()
      .setLngLat([-66.3122395, -33.1843936])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Inmobiliaria La Punta</h1>"))
      .addTo(map);

  }

}
