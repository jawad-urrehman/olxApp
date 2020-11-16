import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../services/item-service.service';
import { Item } from '../models/item_model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private ItemSer : ItemServiceService,public route:ActivatedRoute,
    public router:Router ) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    }

  ngOnInit() {
    this.getItemByCatEle()
  }
 id :string
itms:Item
  getItemByCatEle(){
    this.id = this.route.snapshot.params['choice'];
    this.ItemSer.getItemsByCategory(this.id).subscribe((res)=>{
      this.itms=res;
      
    })
}
}
