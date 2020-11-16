import { User } from './../models/user_model';
import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { Item } from '../models/item_model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private itmser: ItemServiceService,private usrser:UserServiceService,public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getitem()
  }
  Usr:User
  itm:Item
  id = this.route.snapshot.params['id'];
  u_id:String
  getitem(){
    this.itmser.getItem(this.id).subscribe((res)=>{
      this.itm=res;
      this.getuser(); 
      
    })
  }
  getuser(){
    this.u_id=this.itm.userId;
    this.usrser.getoneUser(this.u_id).subscribe((res)=>{
      this.Usr=res;
    
    })
  }
  gotoHome(){
    this.router.navigate(['/home'])
  }
}
