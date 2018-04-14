import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Firebase } from '../../providers/firebase';
import { Camera } from '@ionic-native/camera';
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
  address: any;
  quantity = 0;
  choice = { name: null };
  flavour: any;
  photofrost = 'without'; // for with or without additions
  picture = null;
  phone = null;
  comments: any;
  addpicimg = 'assets/addpic.png';
  
  constructor(public loadingCtrl:LoadingController,
              public firebase:Firebase,
              public camera: Camera,
              public alertCtrl: AlertController,
              public navCtrl: NavController,
              public navParams: NavParams
            ) {
    this.choice = this.navParams.get('choice');
    this.quantity = 1;
  }
  addQuantity(){
    this.quantity++;
  }
  reduceQuantity(){
    if (this.quantity > 1) {
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
      message: '(Orders cannot be modified later) Enter receiver name',
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
          }
        },
        {
          text: 'Submit Order',
          handler: data => {
            var deliveryname = data.title;
            let loader = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loader.present();
            this.firebase.addOrder(this.choice.name, deliveryname, this.quantity, this.photofrost, this.comments, this.address, this.picture, this.phone).then(
              data => {
                loader.dismiss();

                let alert = this.alertCtrl.create({
                  title: 'Order Sent!',
                  subTitle: 'Your order for '+this.choice.name+' has been sent',
                  buttons: ['OK']
                });
                alert.present();
              },
              err => {
                console.log('Error sending data to firebase');
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
  addPic(){
    var cameraOptions = {
      quality: 50,
      destinationType: 0,
      sourceType: 0,
      allowEdit: false,
      encodingType: 1,
      targetWidth: 200,
      targetHeight: 200,
      correctOrientation: true,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(cameraOptions).then((imageData) => {
      const pic = 'data:image/jpeg;base64,' + imageData;
      this.picture = pic;
    });
  }

}
