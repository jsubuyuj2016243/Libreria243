import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccComponent } from './components/admin-acc/admin-acc.component';
import { BooksComponent } from './components/books/books.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { DevolucionComponent } from './components/devolucion/devolucion.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminAcc', component: AdminAccComponent},
  { path: 'userMenu', component: UserMenuComponent},
  { path: 'users', component: UsuariosComponent},
  { path: 'books', component: BooksComponent},
  { path: 'prestamo', component: PrestamoComponent},
  { path: 'devolucion', component: DevolucionComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'crearUsuario', component: CrearUsuarioComponent},
  { path: 'crearLibro', component: CrearLibroComponent},
  { path: 'editarUsuario', component: EditarUsuarioComponent},
  { path: 'editarLibro', component: EditarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
