import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../Models/Usuario.Model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /// Iniciar sesion
  /// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private ENDPOINT = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCAyk9x100TFU3K9R6wf1u-9MVENoR84w';
  userToken: string;

  constructor( private http: HttpClient ) { }

  logout(){
    localStorage.removeItem('token');
   }

  login( usuraio: UsuarioModel ){
    const authData = {
      ...usuraio,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.ENDPOINT }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      } )
    );
  }

  private guardarToken( idToken: string ){
    this.userToken =idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken(){
    if( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  EstaLogeado(): boolean{
    if(!this.userToken){
      return false;
    }else{
       if (this.userToken.length > 2){
          return true;
         }else{
           return false;
       }
    }
  }

}
