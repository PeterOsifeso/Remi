import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmchoicePage } from '../confirmchoice/confirmchoice';

@Component({
  selector: 'page-caketypes',
  templateUrl: 'caketypes.html'
})
export class CaketypesPage {
  cake: any = {};
  cakeTypes: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cake = this.navParams.get('cake');
    this.cakeTypes = this.cake.sizes;
  }
  selectChoice(choice) {
    this.navCtrl.push(ConfirmchoicePage,{choice});
  }
}
