import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class BrowsifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private clientId: string = environment.client_id;
  private clientSecret: string = environment.client_secret;
  private body: any;
  private redirect_uri: string = 'http://localhost:4200/';
  private scope: string = 'user-read-birthdate user-read-private user-read-email';
  private response_type: string = 'code';


  constructor(private _http: Http) { }
 /* Authorization code flow
  getAuthorized = () => {

    return this._http.get(
    //     window.open('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize?client_id=' + this.clientId +
    // '&redirect_uri=' + this.redirect_uri +
    // '&scope=' + this.scope +
    // '&response_type=' + this.response_type, 'spotify')
    
    )
    .map(res => res.headers);
  }

  getToken = (authCode: any) => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'authorization_code');
    params.set('code', authCode)
    params.set('redirect_uri', this.redirect_uri)
    // params.set('Content-Type', 'application/x-www-form-urlencoded');
    let body = params.toString();   

    return this._http.post('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', body, { headers: headers })
      .map(res => res.json());
  }
*/

  // Client credential flow
  // Get access token from Spotify to use API
  getAuth = () => {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(this.clientId + ":" + this.clientSecret));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let params: URLSearchParams = new URLSearchParams();
    params.set('grant_type', 'client_credentials');
    let body = params.toString();

    return this._http.post('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', body, { headers: headers })
      .map(res => res.json());

  }

  get  = (query: string, type: ['artist', 'album', 'track', 'playlist'], authToken: string) => {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + authToken);

    let searchUrl = 'https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search?q=' + query + '&offset=0&limit=5&type=' + type + '&market=US';

    return this._http.get(searchUrl, { headers: headers })
    .map(res => res.json());
  }
}