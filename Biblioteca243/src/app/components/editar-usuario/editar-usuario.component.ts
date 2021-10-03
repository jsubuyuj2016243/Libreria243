import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  public user:User;
  public usuario;
  public token;
  public userUpdated: User;

  constructor(public restUser:RestUserService, public router:Router) {
    this.usuario = restUser.getUser();
    this.token = restUser.getToken();
    this.user = new User('',null,'','','','','','',[],[]);
    this.userUpdated = new User('',null,'','','','','','',[],[]);
  }


  ngOnInit(): void {
  this.showUser()
  }

  showUser(){
    this.restUser.showUser().subscribe(
      response =>{
        console.log(response);
        this.user = response;
        console.log(this.user);
      }
    )
  }


  updateUser(){
    this.restUser.updateUser(this.userUpdated._id, this.userUpdated).subscribe(
      response =>{
        console.log(response);
        this.showUser()
      }
    )
  }

}
