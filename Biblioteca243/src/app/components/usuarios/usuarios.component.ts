import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ RestUserService ]
})
export class UsuariosComponent implements OnInit {
  User:User
  usuarios;
  idUser: User;

  constructor( public userService: RestUserService) {
    this.User =  new User('',null,'','','','','','',[],[]);
    this.idUser = new User('',null,'','','','','','',[],[])
  }

  ngOnInit(): void {
    this.showUser()
  }

  showUser(){
    this.userService.showUser().subscribe(
      response =>{
        console.log(response);
        this.usuarios = response;
        console.log(this.User)
      }
    )
  }

  deleteUser(idUser){
    this.userService.deleteUser(idUser).subscribe(
      response=>{
        console.log(response);
        this.showUser()
      }
    )
  }
  
  seguridadEliminar(idUser){
    this.userService.buscarUsuarioID(idUser).subscribe(
      response=>{
        this.idUser = response;
        Swal.fire({
          title: '¿Quieres eliminar al usuario: ' + this.idUser.nombre,
          text: "Esta accion es irreversible",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteUser(this.idUser._id)
            Swal.fire(
              'El usuario a sido eliminado exitosamente',
              'success'
            )
          }
        })
  
      }
    )
  }
}


