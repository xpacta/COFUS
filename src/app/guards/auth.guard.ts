import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private auth: AuthService, private router: Router ){}

  canActivate(): boolean {
    console.log('Verificado');
    if(this.auth.EstaLogeado()){
      return true;
    }else{
       this.router.navigateByUrl('login');
    }
  }
  /*
    //, CanActivateChild, CanLoad
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }*/
}
