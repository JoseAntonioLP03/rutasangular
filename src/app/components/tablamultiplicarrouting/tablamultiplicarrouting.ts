import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';


@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.html',
  styleUrl: './tablamultiplicarrouting.css',
})
export class Tablamultiplicarrouting implements OnInit{
  public numero: number;
  public resultados: Array<number> = [];

constructor(
  private _activeRoute: ActivatedRoute,
){
    this.numero = 0;
}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      this.resultados = [];
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero']);
        for(let i=1; i<=10; i++){
            this.resultados.push(this.numero * i);
        }
      }
    })
  }
}