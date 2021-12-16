import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Marca } from '../modelos/marca';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private urlEndPoint:string ='http://localhost:9090/marcas/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Marca[]>{
    return this.httpClient.get(this.urlEndPoint+"listar").pipe(
      map((response:any) => response as Marca[])
    );
    }

}
