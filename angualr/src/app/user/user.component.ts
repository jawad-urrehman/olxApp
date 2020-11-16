import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { Item } from '../models/item_model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
itms:Item[]
id:string
  constructor(private itmser: ItemServiceService,public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getItemByUserId();
  }
getItemByUserId(){
  this.id =  localStorage.getItem('UserId'); 
  this.itmser.getItemsByUid(this.id).subscribe((res)=>{
      this.itms=res;
  })
}
gotoReg(){
  this.router.navigate(['/add'])
}

delteitm(id){
  this.itmser.deleteItem(id).subscribe(()=>{
    this.getItemByUserId()
  })
}


}
