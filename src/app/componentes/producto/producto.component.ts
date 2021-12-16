import { Component, OnInit } from '@angular/core';
import { CatalogoProducto } from 'src/app/modelos/catalogoProducto';
import { CatalogoProductoService } from 'src/app/servicios/catalogo-producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
   public catalogoProducto:CatalogoProducto[];
  constructor(private serCatalogo:CatalogoProductoService) {
    this.catalogoProducto= [];
   }

  ngOnInit(): void {
    this.serCatalogo.listar().subscribe(
      cat => this.catalogoProducto=cat
    );
  }

  probar(){
    console.log("hola");
    console.log(this.catalogoProducto);

  }

}
