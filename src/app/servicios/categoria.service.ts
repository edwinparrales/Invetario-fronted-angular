import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlEndPoint:string ='http://localhost:9090/categoria/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Categoria[]>{
    return this.httpClient.get(this.urlEndPoint+"listar").pipe(
      map((response:any) => response as Categoria[])
    );
    }



}
