import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  standalone: false,
  templateUrl: './numerodoble.html',
  styleUrl: './numerodoble.css',
})
export class Numerodoble implements OnInit{
  public doble: number;
  public numero!: number;

constructor(
  private _activeRoute: ActivatedRoute,
  private _router: Router
){
    this.doble = 0;
}

  redirect(num:number):void{
    this._router.navigate(["/numerodoble",num])
  }

  goToHome():void{
    this._router.navigate(["/"]);
  }

  ngOnInit(): void {
    //AQUI ES DONDE NOS SUSCRIBIMOS A LOS PARAMENTROS
    this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENTRO DE PARAMS ES DONDE RECIBIMOS LOS PARAMETROS POR SU :name
      //LA SINTAXIS PARA RECUPERARLOS ES params['PARAMETER NAME']
      //EN ESTE EJEMPLO EL PARAMETRO ES OPCIONAL POR LO QUE PREGUNTAREMOS PRIMERO SI EXISTE
      if(parametros['numero'] != null){
        //EL PARAMETRO SIEMPRE SON STRING 
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
}
