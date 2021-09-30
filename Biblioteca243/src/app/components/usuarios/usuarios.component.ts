import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ RestUserService ]
})
export class UsuariosComponent implements OnInit {
  User:User
  usuarios;

  constructor( public userService: RestUserService) {
    this.User =  new User('',null,'','','','','','',[],[]);
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

}
