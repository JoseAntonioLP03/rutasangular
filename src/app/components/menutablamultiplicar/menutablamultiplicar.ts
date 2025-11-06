import { Component } from '@angular/core';

@Component({
  selector: 'app-menutablamultiplicar',
  standalone: false,
  templateUrl: './menutablamultiplicar.html',
  styleUrl: './menutablamultiplicar.css',
})
export class Menutablamultiplicar {
  public numerosAleatorios: Array<number>;

  constructor() {
    this.numerosAleatorios = [];
    for (let i = 0; i < 6; i++) {
      const numero = Math.floor(Math.random() * 100);
      this.numerosAleatorios.push(numero);
    }
  }
}
