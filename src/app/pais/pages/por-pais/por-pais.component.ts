import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(termino).subscribe((response) => {
      // La respuesta que nos den rellena la tabla que mostramos
      console.log(response);
      this.paises = response;
    }, () => {
      // Si se produce un error se pone vacia la tabla de paises
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(event: any) {
    this.hayError = false;
    // TODO: crear sugerencias

  }

}
