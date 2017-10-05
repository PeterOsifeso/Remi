import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {Firebase} from "../../providers/firebase";

/*
  Generated class for the Confirmchoice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirmchoice',
  templateUrl: 'confirmchoice.html'
})
export class ConfirmchoicePage {
  address:any;
  quantity:number=0;
  choice:any={};
  flavour:any;
  photofrost:any="without";// for with or without additions
  comments:any;
  constructor(public loadingCtrl:LoadingController,public firebase:Firebase,public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.choice=this.navParams.get('choice');
    this.quantity=1;
    //display the choice on html and add additional fields
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmchoicePage');
  }

  addQuantity(){
    this.quantity++;
    console.log(this.quantity);
  }
  reduceQuantity(){
    if(this.quantity>1){
      this.quantity--;
    }
  }
  submitOrder(){

    /* Contents of an order
    this.choice.name;
    this.choice.price;
    this.choice.shapeornum;
    this.quantity;
    this.comments;
    this.photofrost;
    this.address;
    */

    let prompt = this.alertCtrl.create({
      title: 'Confirm Order',
      message: "Enter name for delivery",
      inputs: [
        {
          name: 'title',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('Saved clicked');
            var deliveryname=data.title;
            let loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loader.present();
            //now send all data to server
            this.firebase.addOrder(this.choice.name, deliveryname,this.quantity, this.photofrost,this.comments, this.address).subscribe(
              data=>{
                console.log("Data successfully sent to firebase");
                loader.dismiss();

                let alert = this.alertCtrl.create({
                  title: 'Order Sent!',
                  subTitle: 'Your order for '+this.choice.name+' has been sent',
                  buttons: ['OK']
                });
                alert.present();
              },
              err=>{
                console.log("Error sending data to firebase");
                loader.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: 'Your order could not be sent at the moment.. Check your internet connection and try again',
                  buttons: ['OK']
                });
                alert.present();
              }
            );

          }
        }
      ]
    });
    prompt.present();
  }

}
