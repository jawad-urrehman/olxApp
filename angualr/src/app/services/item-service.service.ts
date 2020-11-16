import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http:Http) { }

  getItem(id){
    return this.http.get("http://localhost:3000/item/"+id).map(res=>res.json());
}

getItems(){
  return this.http.get("http://localhost:3000/item").map(res => res.json());
}

getItemsByUid(id){
  return this.http.get("http://localhost:3000/item/user/"+id).map(res=>res.json());
}

getItemsByCategory(cat){
  return this.http.get("http://localhost:3000/item/category/"+cat).map(res => res.json());
}

addTtem(itm){
  return this.http.post("http://localhost:3000/item",itm).map(res => res.json());
}


deleteItem(id){
  return this.http.delete("http://localhost:3000/item/"+id).map(res => res.json());
}

updateItem(id,itm){
  return this.http.put("http://localhost:3000/item/"+id,itm).map(res => res.json());
}
}
