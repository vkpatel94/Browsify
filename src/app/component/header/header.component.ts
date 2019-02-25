import { Component, OnInit, Input } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { User } from '../../models/User';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  user = []; 
  query: string;
  private redirect_uri: string = 'http://localhost:4200/redirect';
  private scope: string = 'user-read-birthdate user-read-private user-read-email';
  private response_type: string = 'code';
  private clientId: string = environment.client_id;
  constructor() { }


  onLogin() {
    const url = 'https://accounts.spotify.com/authorize?client_id=' + this.clientId +
    '&redirect_uri=' + this.redirect_uri +
    '&scope=' + this.scope +
    '&response_type=' + this.response_type;

    window.location.href = url;
  }

  ngOnInit() {
    //debugger
     if(localStorage.getItem("user")) {
       this.user = [JSON.parse(localStorage.getItem("user"))];
       this.isLoggedIn = true;
     }
  }

}




































