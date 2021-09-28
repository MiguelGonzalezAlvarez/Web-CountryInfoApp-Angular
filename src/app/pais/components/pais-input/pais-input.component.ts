import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() buscarEvent: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.buscarEvent.emit(this.termino);
  }

}
