import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverSession',
  templateUrl: './popoverSession.component.html'
})
export class PopoverSessionComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {}

  sesionDestroy(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
    this.popoverController.dismiss();
  }


}
