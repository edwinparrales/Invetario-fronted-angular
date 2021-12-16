import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./componentes/dashboard/dashboard.component";
import {ProductoComponent} from "./componentes/producto/producto.component";
import {CategoriaComponent} from "./componentes/categoria/categoria.component";
import {FormularioCatalogoProductoComponent} from "./componentes/formulario-catalogo-producto/formulario-catalogo-producto.component";
import {ProductoInventarioComponent} from "./componentes/producto-inventario/producto-inventario.component";
import { MarcaComponent } from './componentes/marca/marca.component';

const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  {path:"producto",component:ProductoComponent},
  {path:"categoria",component:CategoriaComponent},
  {path:"frmcatprod",component: FormularioCatalogoProductoComponent},
  {path:"prodinv",component:ProductoInventarioComponent},
  {path:"marcas",component:MarcaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
