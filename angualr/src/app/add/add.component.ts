import { Http } from '@angular/http';
import { ItemServiceService } from './../services/item-service.service';
import { Item } from './../models/item_model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private ItemSer : ItemServiceService, private http:Http,public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
  }
 item = new Item();
image:string
pic:string
takeimage(event){
  if(event.target.files.length > 0){
    const file = event.srcElement.files[0].name;
    this.image = file;
    this.pic = event.target.files[0];
  }
}
upladImang(){
  const formData = new FormData();
  formData.append('file', this.pic);

  this.http.post('http://localhost:3000/file', formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
}



addItem(){
  
  this.item.userId = localStorage.getItem('UserId');
  this.item.image = this.image; 
    this.ItemSer.addTtem(this.item).subscribe(()=>{
      this.router.navigate(['/user'])     
      console.log(this.item)
    })
}

goBack(){
  this.router.navigate(['/user'])
}

}
