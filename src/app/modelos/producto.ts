export class Producto {
   id!:number;
   codReferencia!: string;
   codigoBarras!:string;
   idCategoria!:string;
   idMarca!:string;
   modelo!:string;
   cantidad:number=0;
   cantidadMin:number=1;
   valorProducto:number=0;
   fechaCreacion:Date=new Date();
   imagen:string="/";
   idUsuario!:string;

}
