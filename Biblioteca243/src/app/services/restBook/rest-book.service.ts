import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestBookService {
  public headers = new HttpHeaders().set('Content-Type',  'application/json');
  public uri:string;
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

  public book;
  public token;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }



  constructor(private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  getBook(){
    let book = JSON.parse(localStorage.getItem('book'));
    if(book != undefined || book != null){
      this.book = book
    }else{
      this.book = null;
    }
    return this.book;
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

  saveBook(book){
    let params = JSON.stringify(book);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.post(this.uri + 'crearUsuario', params, {headers:headers})
      .pipe(map(this.extractData));
  }
}