import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carrito/carrito.component';

//firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { environment } from "../environments/environment";

//service
import { TiendaService } from "./tienda.service";
import { RegisterComponent } from './register/register.component';
import { BuscadorPipe } from './buscador.pipe';  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraSuperiorComponent,
    InicioComponent,
    VerMasComponent,
    CatalogoComponent,
    CarritoComponent,
    RegisterComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireDatabase, AngularFireAuth, AngularFireAuthModule, TiendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
