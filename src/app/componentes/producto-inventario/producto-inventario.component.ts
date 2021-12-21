import { Component, OnInit } from '@angular/core';
import { CatalogoProducto } from 'src/app/modelos/catalogoProducto';
import { CatalogoProductoService } from 'src/app/servicios/catalogo-producto.service';

@Component({
  selector: 'app-producto-inventario',
  templateUrl: './producto-inventario.component.html',
  styleUrls: ['./producto-inventario.component.css']
})
export class ProductoInventarioComponent implements OnInit {
  public productos!:CatalogoProducto[];
  public codigo!:string;

  constructor(private catalogoProductoService:CatalogoProductoService) {
    this.codigo="PRO00000002";
   }

  ngOnInit(): void {

  }

   buscarCodigo(){
    this.catalogoProductoService.buscarCodigo(this.codigo).subscribe(
      data => this.productos= data
    );
      console.log("productos",this.productos);
   }
}
