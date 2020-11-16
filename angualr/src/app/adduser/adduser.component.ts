import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user_model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private usrSer :UserServiceService,
    public route:ActivatedRoute,
    public router:Router) { }
    
  ngOnInit() {
  }
  usr = new User();
adduser(){

  this.usrSer.addUser(this.usr).subscribe(()=>{
    this.gotolog();
  })
}
gotolog(){
  this.router.navigate(['/log'])
}

}
