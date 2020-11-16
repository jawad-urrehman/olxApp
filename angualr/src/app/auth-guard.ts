import { UserServiceService } from './services/user-service.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private UserSer:UserServiceService, private router:Router){

  }

  canActivate() {
    if(this.UserSer.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/log']);
      return false;
    }
  }
}