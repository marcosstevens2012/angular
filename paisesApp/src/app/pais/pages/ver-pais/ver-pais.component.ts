import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService ){ }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      ({ id }) => {
        console.log(id)

        this.PaisService.getPaisPorCodigo( id )
        .subscribe( pais=> {
          console.log(pais)
        })
      }
    )

  }

}
