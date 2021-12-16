import { Categoria } from "./categoria";
import { Marca } from "./marca";

export interface CatalogoProducto{
   id:number;
   codigoEan:string;
   descripcion:string;
   idCategoria:Categoria;
   marca:Marca;
   modelo:string;
   codigoRef:string;
   cantidad:number;
   cantidadMin:number;
   valorProducto:number;
   fecha:string;
   idUsuario:string;

}
