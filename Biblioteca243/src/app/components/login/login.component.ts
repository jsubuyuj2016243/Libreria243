import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User;
  token:string;
  userLogged;

  constructor(private restUser:RestUserService, private router:Router) {
    this.user = new User('',null,'','','','','','',[],[]);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user).subscribe((res:any)=>{
      if(res.token){
        this.userLogged = res.userFound;
        this.token = res.token;
        if(this.token.length <= 0){
          alert('El token no se genero correctamente');
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.userLogged));
          alert('Usuario Logeado');
          this.router.navigateByUrl('userMenu')
        }
      }else{
        alert(res.report)
      }
    },
    (error:any) => alert(error.error.report)
    )
  }


}
