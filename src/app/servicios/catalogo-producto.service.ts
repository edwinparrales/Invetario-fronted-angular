import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogoProducto } from '../modelos/catalogoProducto';


@Injectable({
  providedIn: 'root'
})

export class CatalogoProductoService {
  private urlEndPoint:string ='http://localhost:9090/catalogo/';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<CatalogoProducto[]>{
    return this.httpClient.get(this.urlEndPoint+"listar").pipe(
      map((response:any) => response as CatalogoProducto[])
    );
    }

    crear(catalogo:CatalogoProducto):Observable<CatalogoProducto>{
      return this.httpClient.post<CatalogoProducto>(this.urlEndPoint+"guardar",catalogo,{headers:this.httpHeaders});
    }

    buscarCodigo(codigo:string):Observable<CatalogoProducto[]>{
      return this.httpClient.get(`${this.urlEndPoint}buscarCodigo/${codigo}`).pipe(
        map((response:any)=>response as CatalogoProducto[])
      )

    }


}
