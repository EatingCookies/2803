import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ConsumidorService } from '../../service/consumidor.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  lista: Libro[] = []

  constructor(
    private _servicio:ConsumidorService
  ) { }

  ngOnInit(): void {
    this._servicio.consumirServicio().subscribe(
      req =>{
        this.lista = req
      },
      err =>{
        var mensaje = err.error();
        console.log(mensaje);
      },
    );
  }

}
