import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ConfirmchoicePage} from "../confirmchoice/confirmchoice";

/*
  Generated class for the Caketypes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-caketypes',
  templateUrl: 'caketypes.html'
})
export class CaketypesPage {
  cake:any={};
  cakeTypes:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cake=this.navParams.get('cake');

    this.cakeTypes=this.cake.sizes;
    //should be used to ngFor for the html
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaketypesPage');
  }
  selectChoice(choice){
    this.navCtrl.push(ConfirmchoicePage,{choice});
  }

}
