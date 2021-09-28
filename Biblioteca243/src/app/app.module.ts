import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminAccComponent } from './components/admin-acc/admin-acc.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { BooksComponent } from './components/books/books.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { HistorialComponent } from './components/historial/historial.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AdminAccComponent,
    UserMenuComponent,
    UsuariosComponent,
    BooksComponent,
    PrestamoComponent,
    DevolucionComponent,
    HistorialComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    CrearLibroComponent,
    EditarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
