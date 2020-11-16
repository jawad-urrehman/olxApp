import { ItemServiceService } from './../services/item-service.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item_model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itms:Item
  constructor(private itemSer :ItemServiceService) { }

  ngOnInit() {
    this.showItems()
  }

showItems(){
  this.itemSer.getItems().subscribe((res)=>{
    this.itms=res
  })
}

}
