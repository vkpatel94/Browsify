import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowsifyService } from '../../services/browsify.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _browsifyService: BrowsifyService) { }

  authCode: string;
  query: string;
  user = []
  
  ngOnInit() {
    
    if(!localStorage.getItem("user")) {
      this.route.queryParams
      .subscribe(params => this._browsifyService.getToken(params['code'])
        .subscribe(res => {
          localStorage.setItem("token", res.access_token);
          this._browsifyService.getUser(res.access_token)
          .subscribe(res => {
          localStorage.setItem("user", JSON.stringify(res))
          this.user.push(JSON.parse(localStorage.getItem("user")))
          window.location.href = '/home';
          }
            )
        })
      )
      
    } 
  }
}
