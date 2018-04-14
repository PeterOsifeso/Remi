import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaketypesPage } from "../caketypes/caketypes";
import { Firebase } from '../../providers/firebase';

@Component({
  selector: 'page-delievery',
  templateUrl: 'delievery.html'
})
export class DelieveryPage {
  cakes: any = {};

  constructor(public firebase:Firebase, public navCtrl: NavController, public navParams: NavParams) {
    this.cakes = [
      {
        name: 'Amber', thumbnailimg: 'assets/amberthumb.jpg', description: 'This includes all our rectangular and heart shaped fundant single tiered cakes. It comes in all flavours with an additional fee of 200 denars for photophrost.', sizes:[{name: 'Rectangular Amber', shapeornum: 'Rectangular', price: '3,500 МКД', image:'assets/amberrectangle1.jpg'},{name: 'Heart Shaped Amber', shapeornum: 'Heart', price: '2,500 МКД', image:'assets/heartshapedamber.jpg'}]
      },{
        name: 'Cupcakes', thumbnailimg: 'assets/cupcakesthumb.jpg', description: 'Includes: <br> - Fruit Toppings <br> - Photo frosts (pictures, logos e.t.c) <br> - Themed Cupcakes', sizes:[{name: '2x3 cupcake pack', shapeornum: '6 pieces of cupcakes', price: '1,000 МКД', image:'assets/twobythreecupcake.jpg'},{name: '3x3 cupcake pack', shapeornum: '9 pieces of cupcakes', price: '1,200 МКД', image:'assets/threebythreecupcake.jpg'},{name: '2x2 cupcake pack', shapeornum: '4 pieces of cupcakes', price: '800 МКД', image:'assets/twobytwocupcake.jpg'}]
      },{
        name: 'Ruby', thumbnailimg: 'assets/rubythumb.jpg', description: 'This includes our round fundant single tiered cakes. it comes in all flavors with an additional fee of 200 denars for photofrost', sizes:[{name: '12 inch Ruby', shapeornum: '1 piece', price: '2,000 МКД', image:'assets/twelveinchruby.jpg'},{name: '22 inch Ruby', shapeornum: '1 piece', price: '2,500 МКД', image:'assets/twentytwoinchruby.jpg'}]
      },{
        name: 'Emerald', thumbnailimg: 'assets/emeraldthumb.jpg', description: 'This includes our box/squared shaped fundant single tiered cakes. it comes in all flavors with an additional fee of 200 denars for photofrost', sizes:[{name: '30x30 Emerald', shapeornum: '1 piece', price: '3,000 МКД', image:'assets/thirtybythirtyemerald1.jpg'}]
      },{
        name: 'Special Designs', thumbnailimg: 'assets/specialthumb.jpg', description: 'This includes all cakes with special specifications not included in the other available cakes. these are designed according to special requirements of our clients and prices for these cakes vary.', sizes:[{name: 'Sample 1', shapeornum: 'special', price: '3,000 МКД', image:'assets/specialsample1.jpg'},{name: 'Sample 2', shapeornum: 'special', price: '3,000 МКД', image:'assets/specialsample2.jpg'}]
      }
    ]
  }
  // retrieveCakes() {
  //   this.firebase.getCakes().then( (cakes) => {
  //     this.cakes = cakes.val();
  //   });
  // }
  goToTypes(cake) {
    this.navCtrl.push(CaketypesPage, {'cake': cake});
  }
}
