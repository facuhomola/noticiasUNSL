import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { MultimediosComponent } from './multimedios/multimedios.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader/public-api';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    NovedadesComponent,
    MultimediosComponent,
    DestacadosComponent,
    CategoriasComponent,
    AgendaComponent,
    EtiquetasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
     
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
