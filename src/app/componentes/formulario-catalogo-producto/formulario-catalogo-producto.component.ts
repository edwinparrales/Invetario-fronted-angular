import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria';
import { Marca } from 'src/app/modelos/marca';
import { Proveedor } from 'src/app/modelos/proveedor';
import { CatalogoProductoService } from 'src/app/servicios/catalogo-producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { MarcaService } from 'src/app/servicios/marca.service';
import { CatalogoProducto } from 'src/app/modelos/catalogoProducto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-catalogo-producto',
  templateUrl: './formulario-catalogo-producto.component.html',
  styleUrls: ['./formulario-catalogo-producto.component.css']
})
export class FormularioCatalogoProductoComponent implements OnInit {
  public marcas!:Marca[];
  public categorias!:Categoria[];
  public catalogo!:CatalogoProducto;
  public categoria!:Categoria;
  public marca!:Marca;
  public proveedor!:Proveedor;

  public form!: FormGroup;
  public submitted= false;


  constructor(private serviceMarcas:MarcaService,private categoriaService:CategoriaService,
    private catalogService:CatalogoProductoService,private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        codigoRef: [''],
        codigoEan: [''],
        descripcion: [''],
        valorProducto: [''],
        modelo: [''],
        imagen: [''],
        cantidadMin: [''],
        marca: [''],
        categoria: [''],

      });


     }

  ngOnInit(): void {

    this.serviceMarcas.listar().subscribe(
      data => this.marcas=data
      );

      this.categoriaService.listar().subscribe(
        data => this.categorias=data
      );

  }

  onSubmit(){
    //this.catalogo.cantidadMin! =this.form.get('cantidadMin') as number ?? 1;
    const producto: CatalogoProducto = {
      idProducto: 0,
      codigoRef: "tttttt",//this.form.get('codigoRef')?.value,

      codigoEan: this.form.get('codigoEan')?.value,
      descripcion: this.form.get('descripcion')?.value,
      idCategoria: this.form.get('categoria')?.value,
      categoria:this.categoria,
      idMarca: this.form.get('marca')?.value,
      marca: this.marca,
      modelo: this.form.get('modelo')?.value,

      cantidad:1,
      cantidadMin: this.form.get('cantidadMin')?.value,
      valorProducto: this.form.get('valorProducto')?.value,
      fechaCreacion: "2021-12-18T06:35:48Z",
      imagen: this.form.get('imagen')?.value,
      idUsuario: this.form.get('codigoRef')?.value,
      idProveedor: 1,
      proveedor:this.proveedor,
    };
    console.log("producto",producto);

    this.catalogService.crear(producto).subscribe(
      data => this.catalogo = data
    );

  }


}
