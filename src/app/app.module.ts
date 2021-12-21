import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { LayoutsidenavComponent } from './componentes/layoutsidenav/layoutsidenav.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { FormularioCatalogoProductoComponent } from './componentes/formulario-catalogo-producto/formulario-catalogo-producto.component';
import { ProductoInventarioComponent } from './componentes/producto-inventario/producto-inventario.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { MarcaComponent } from './componentes/marca/marca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ProductoComponent,
    LayoutsidenavComponent,
    CategoriaComponent,
    FormularioCatalogoProductoComponent,
    ProductoInventarioComponent,
    MarcaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
