import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    // Utilizamos la desestructuracion de objetos para obetener el id de los params
    // Usamos el switchMap para evitar tener que usar dos subscribe ya que params es tambien un observable
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)), tap(console.log))
      .subscribe(pais => this.pais = pais);
  }

}
