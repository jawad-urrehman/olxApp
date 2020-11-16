import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user_model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private usrSer:UserServiceService,public router:Router) { }

  ngOnInit() {
    this.UserName()
  }
  usr:User;
  name:String;
  
  
isLogggedIn(){
  return this.usrSer.loggedIn();
}
logout(){
  localStorage.clear();
  
  this.router.navigate(['/log'])
}
UserName(){
  this.name = "User Managment"
   this.usrSer.getoneUser(localStorage.getItem('userId')).subscribe(res=>{
      this.usr=res;
  })
  
}
}
