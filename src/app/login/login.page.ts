import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../Models/Usuario.Model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { EncryptionDecryptionService } from '../services/encryption-decryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel;
  valor: any;
  myJSONString: any;
  myJSON: any;
  constructor( private auth: AuthService, private router: Router, private dataService: DataService, private EncrypDecript: EncryptionDecryptionService) { }

  SaveEmail = false;
  ngOnInit() {
    this.usuario = new UsuarioModel();
    if ( localStorage.getItem('email') ){
      this.usuario.email = localStorage.getItem('email');
      this.usuario.password = this.EncrypDecript.decrypt(localStorage.getItem('password'));
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
        localStorage.setItem('password', this.EncrypDecript.encrypt(this.usuario.password));
      }
      this.myJSONString = JSON.stringify(resp);
      this.myJSON = JSON.parse(this.myJSONString);
      console.log(this.myJSON.localId);

      this.dataService.getUsuario(this.myJSON.localId).subscribe(data=>{
        console.log(data);
        this.valor = JSON.stringify(data);
        this.valor = JSON.parse(this.valor);
        localStorage.setItem('user',this.valor.Usuario);
        localStorage.setItem('perfil',this.valor.Perfil);
        localStorage.setItem('idOneSignal',this.valor.IdOneSignal);
        this.router.navigateByUrl('/home');
      });  

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
