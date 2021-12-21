import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { Proveedor } from "./proveedor";

export interface CatalogoProducto{
   idProducto:number;
   codigoEan:string;
   descripcion:string;
   idCategoria:number;
   categoria:Categoria;
   idMarca:number;
   marca:Marca;
   modelo:string;
   codigoRef:string;
   cantidad:number;
   cantidadMin:number;
   valorProducto:number;
   fechaCreacion:string;
   imagen:string;
   idUsuario:string;
   idProveedor:number;
   proveedor:Proveedor;

}
