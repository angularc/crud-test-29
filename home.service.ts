import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Home} from '../sharedSweetHome/home.model';
//import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

SelectedHome : Home;
HomeListsData : Home[];

  constructor(public http : Http) { }

  PostMyHome(hoho : Home){
   var body = JSON.stringify (hoho);
   var headeroptions = new Headers ({'Content-Type' : 'application/json'});
   var requestoptions = new RequestOptions ({method : RequestMethod.Post, headers: headeroptions});
   return this.http.post('https://localhost:44348/api/SweetHomes',body,requestoptions).map(a => a.json());
  }
  PutMyHome(id, hoho){
    var body = JSON.stringify(hoho);
    var headeroptions = new Headers({'Content-Type': 'application/json'});
    var requestoptions = new RequestOptions ({method : RequestMethod.Put, headers : headeroptions});
    return this.http.put('https://localhost:44348/api/SweetHomes/' + id, body, requestoptions).map(res => res.json());
  }
  GetHome(){
    this.http.get('https://localhost:44348/api/SweetHomes').map((data : Response) => {
      return data.json() as Home[];
    }).toPromise().then(x => {this.HomeListsData = x})
  }
  DeleteMyHome(id :number){
   return this.http.delete('https://localhost:44348/api/SweetHomes/' + id,).map(res => res.json());
  }
}
