import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {
  firebaseDb: any;
  constructor() {
    const config = {
      apiKey: "AIzaSyBL6OsvCV-I_4rQvWpAZ4bu8uJHMU-jlKk",
      authDomain: "crystals-a635c.firebaseapp.com",
      databaseURL: "https://crystals-a635c.firebaseio.com",
      projectId: "crystals-a635c",
      storageBucket: "crystals-a635c.appspot.com",
      messagingSenderId: "749233278402"
    };
    firebase.initializeApp(config);
    this.firebaseDb = firebase.database();
  }
  
  addInquiry(name, email, phone, message, photos): Promise<any> {
    return this.firebaseDb.ref('inquiry/').set({
      username: name,
      email: email,
      phone: phone,
      photos: photos
    });
  }
  addOrder(itemname, deliveryname, quantity, photofrost, comments, address, picture, phone): Promise<any> {
    const currentTime = Date.now();
    return this.firebaseDb.ref('orders/' + currentTime).set({
      itemname: itemname,
      deliveryname: deliveryname,
      quantity: quantity,
      photofrost: photofrost,
      comments: comments,
      address: address,
      picture: picture,
      phone: phone
    });
  }
  getCakes() {
    return this.firebaseDb.ref('/cakes').once('value');
  }
}
