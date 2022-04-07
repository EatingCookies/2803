import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumidorService {

  //url del servicio
  url;

    constructor(
      private _http: HttpClient) {
      
    this.url = "https://jsonplaceholder.typicode.com/posts"
   }

   consumirServicio():Observable<Libro[]> {
     return this._http.get<Libro[]>(this.url);
   }
}
