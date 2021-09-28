import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = 'Hola Mundo';
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe((response) => {
      console.log(response);
    }, (error: any) => {
      console.log(error);
      this.hayError = true;
    });
  }

}
