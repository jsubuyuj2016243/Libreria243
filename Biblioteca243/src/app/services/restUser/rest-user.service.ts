import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model'


@Injectable({
  providedIn: 'root'
})
export class RestUserService {
  public headers = new HttpHeaders().set('Content-Type',  'application/json');
  public uri:string;
  public user;
  public token;
  public httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.getToken()
    })
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != undefined || user != null){
      this.user = user
    }else{
      this.user = null;
    }
    return this.user;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null
    }
    return this.token;
  }

  login(user):Observable<any>{
    let params = JSON.stringify(user)
    return this.http.post(this.uri + 'Login', params, this.httpOptions)
      .pipe(map(this.extractData));
  }

  saveUser(user){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.post(this.uri + 'crearUsuario', params, {headers:headers})
      .pipe(map(this.extractData));
  }

  updateUser(idUser,usuario:User):Observable<any>{
    let headers = this.headers.set('Authorization', this.getToken())
    let params = JSON.stringify(usuario)

    return this.http.put(this.uri + '/editarUsuario/'+idUser, params, {headers:headers})
  }

  showUser():Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri + '/mostrarUsuarios', {headers:headers})
  }

  deleteUser(idUser):Observable<any>{
    let token = this.headers.set('Authorization' , this.getToken())

     return this.http.delete(this.uri + '/eliminarUsuario/' + idUser, {headers: token})
   }

   buscarUsuarioID(idUser):Observable<any>{
    return this.http.get(this.uri + '/buscarUsuarioID/'+ idUser, {headers: this.headers} )
   }
}
