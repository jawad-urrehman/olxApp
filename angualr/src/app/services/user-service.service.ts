import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:Http) { }

  getUser(){
    return this.http.get("http://localhost:3000/user").map(res => res.json());
  }

  loginUser(user){
    return this.http.post("http://localhost:3000/user/login",user).map(res => res.json());
  }
  
  getoneUser(id){
    return this.http.get("http://localhost:3000/user/"+id).map(res => res.json());
  }
  
  addUser(user){
    return this.http.post("http://localhost:3000/user",user).map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired();
  }
  
  
  deleteUser(id){
    return this.http.delete("http://localhost:3000/user/"+id).map(res => res.json());
  }
  
  updateUser(id,user){
    return this.http.put("http://localhost:3000/user/"+id,user).map(res => res.json());
  }
  
}
