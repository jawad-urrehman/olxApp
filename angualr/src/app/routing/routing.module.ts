import { AuthGuard } from './../auth-guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AddComponent } from '../add/add.component';
import { AdduserComponent } from '../adduser/adduser.component';
import { LoginComponent } from '../login/login.component';

import { UserComponent } from '../user/user.component';
import { ShowComponent } from '../show/show.component';
import {CategoryComponent} from '../category/category.component'



const routes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component:HomeComponent},
  {path:'add', component:AddComponent, canActivate:[AuthGuard]},
  {path:'addUser', component:AdduserComponent},
  {path:'log', component:LoginComponent},
  
  {path:'user', component:UserComponent,canActivate:[AuthGuard]},
  {path:'show/:id', component:ShowComponent},
  {path:'cat/:choice', component:CategoryComponent},
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
