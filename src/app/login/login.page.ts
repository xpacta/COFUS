import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../Models/Usuario.Model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel;
  constructor( private auth: AuthService, private router: Router ) { }

  SaveEmail = false;
  ngOnInit() {
    this.usuario = new UsuarioModel();
    if( localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.SaveEmail = true;
    }
  }

  OnSubmit( FormularioLogin: NgForm ){
    if (FormularioLogin.invalid){
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor.'
    });
    Swal.showLoading();

    this.auth.login( this.usuario )
    .subscribe( resp => {
      Swal.close();
      if(this.SaveEmail){
        localStorage.setItem('email', this.usuario.email);
      }
      this.router.navigateByUrl('/home');
      console.log(resp);
    }, (err) => {
    console.log(err.error.error.message);
    Swal.fire({
      allowOutsideClick: true,
      icon: 'error',
      text: 'Revise sus credenciales.'
    });
    });
  }

}
