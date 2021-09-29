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

  constructor(private restUser:RestUserService, private router:Router) {
    this.usuario = restUser.getUser();
    this.token = restUser.getToken();
    this.user = new User('',null,'','','','','','',[],[]);
  }


  ngOnInit(): void {
  }

  updateUser(){
    this.restUser.updateUser(this.user).subscribe((res:any)=>{
      if(res.userUpdated){
        alert(res.report);
        this.user = new User('',null,'','','','','','',[],[]);
        this.router.navigateByUrl('userMenu');    
      }else{
        alert(res.report);
      }
    },
    (error:any) => alert(error.error.report)
    )
  }


}
