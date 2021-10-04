import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-continente',
  templateUrl: './por-continente.component.html',
  styles: [`
    button {
        margin-right: 5px;
    }
  `
  ]
})
export class PorContinenteComponent {

  continentes: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  continenteActivo: string = 'Africa';

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarContinente(termino).subscribe((response) => {
      // La respuesta que nos den rellena la tabla que mostramos
      this.paises = response;
    }, () => {
      // Si se produce un error se pone vacia la tabla de paises
      this.hayError = true;
      this.paises = [];
    });
  }

  activarContinente(continente: string): void {
    if (continente !== this.continenteActivo) {
      // Si el continente no cambia no es necesario llamar de nuevo a la api
      this.buscar(continente);
      this.continenteActivo = continente;
    }
  }

  getClaseCss(continente: string): string {
    return (continente === this.continenteActivo) ? 'btn btn-primary' : 'btn sbtn-outline-primary'
  }

  sugerencias(event: any) {
    this.hayError = false;
    // TODO: crear sugerencias
  }

}
