import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../models/user_model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserServiceService,public route:ActivatedRoute,
    public router:Router) { }
  
  ngOnInit() {
  }
  
  usr = new User();
  show:boolean;
  msg:string;
  login(){
   
    this.userService.loginUser(this.usr).subscribe((res)=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('UserId',res.userId);
        this.router.navigate(['/user']) 
}
,(err)=>{
  this.show = true
  this.msg = err._body
})

  }


gotoSignUp(){
  this.router.navigate(['/addUser']);
}

}
