import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AuthGuard } from '../app/auth-guard';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { LoginComponent } from './login/login.component';

import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component'; 
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing/routing.module';
import { RouterModule, CanActivate } from '@angular/router';
import { UserServiceService } from './services/user-service.service';
import { ItemServiceService } from './services/item-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AdduserComponent,
    HomeComponent,
    ShowComponent,
    NavComponent,
    CategoryComponent,
    UserComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,FormsModule,HttpModule,RoutingModule,RouterModule.forRoot([])
  ],
  providers: [ItemServiceService,UserServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
