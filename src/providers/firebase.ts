import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {

  constructor(public http: Http) {
    console.log('Hello Firebase Provider');
  }

  addInquiry(name,email,phone,message,photos): Observable<Response> {

    let body={
      name: name,
      email: email,
      phone:phone,
      message: message,
      photos: photos
    };
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let url ='https://crystalcakes-420e4.firebaseio.com/inquiry/'+name+'.json';
    return this.http.put(url, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
  addOrder(itemname, deliveryname,quantity,photofrost,comments,address): Observable<Response> {

    let body={
      itemname:itemname,
      deliveryname:deliveryname,
      quantity:quantity,
      photofrost: photofrost,
      comments:comments,
      address: address
    };
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let url ='https://crystalcakes-420e4.firebaseio.com/orders/'+itemname+'-'+deliveryname+'.json';
    return this.http.put(url, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

}
