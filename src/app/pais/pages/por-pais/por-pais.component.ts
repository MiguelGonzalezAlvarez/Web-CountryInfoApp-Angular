import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      li { 
        cursor: pointer; 
      }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias = false;
  terminoAlert = false;

  paises: Pais[] = [];
  paisesSugeridos: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string): void {
    // Si nos pasan un termino vacio no se realiza la busqueda de paises
    if (!termino.length) {
      this.mostrarSugerencias = false;
      this.terminoAlert = true;
    }
    else {
      this.terminoAlert = false;
      this.mostrarSugerencias = false;
      this.hayError = false;
      this.termino = termino;

      this.paisService.buscarPais(termino).subscribe((response) => {
        // La respuesta que nos den rellena la tabla que mostramos
        this.paises = response;
      }, () => {
        // Si se produce un error se pone vacia la tabla de paises
        this.hayError = true;
        this.paises = [];
      });
    }
  }

  sugerencias(termino: string) {
    // Si nos pasan un termino vacio no se realiza la busqueda de sugerencias
    // No es necesario porner la alerta de termino vacio porque en el autocomplete no salen opciones
    if (!termino.length) {
      this.mostrarSugerencias = false;
    }
    else {
      this.terminoAlert = false;
      this.hayError = false;
      this.termino = termino;
      this.mostrarSugerencias = true;
      
      // Mostramos solamente tres paises como sugerencias
      this.paisService.buscarPais(termino).subscribe(
        (response) => this.paisesSugeridos = response.splice(0, 3),
        () => this.paisesSugeridos = []);
    }
  }

}
