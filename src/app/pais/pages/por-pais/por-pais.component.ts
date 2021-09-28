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

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.paisService.buscarPais(this.termino).subscribe((response: any) => {
      console.log(response);
    });
  }

}
