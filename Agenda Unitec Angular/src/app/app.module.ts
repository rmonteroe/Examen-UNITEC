import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Importar HttpClientModule
//import {HttpClientModule} from '@angular/common/http';


//Rutas
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { contactosListComponent } from './components/contactos_list.component';
import { ContactosAddComponent } from './components/contactos_add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    contactosListComponent,
    ContactosAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  // HttpClientModule
  ],
  providers: [
    appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
