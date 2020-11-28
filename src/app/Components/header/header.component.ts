import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router ){}
  @Input() titulo: string = '';

  sesionDestroy(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
