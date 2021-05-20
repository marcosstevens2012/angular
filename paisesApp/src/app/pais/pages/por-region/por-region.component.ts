import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {
      margin: 5px
    }`  
    
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia','Europe', 'Oceania']
  regionActiva: string =''
  
  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];


  constructor(private paisService: PaisService) { }


  activarRegion ( termino:string ) {
    this.regionActiva = termino

    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarRegion( termino )
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises   = [];
      });

  }

}
