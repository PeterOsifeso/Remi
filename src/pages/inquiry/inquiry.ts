import { Component } from '@angular/core';
import {NavController, NavParams, ToastController, LoadingController, AlertController} from 'ionic-angular';
import { Camera } from 'ionic-native';
import {Firebase} from "../../providers/firebase";

/*
  Generated class for the Inquiry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inquiry',
  templateUrl: 'inquiry.html'
})
export class InquiryPage {
  name:string='';
  email:string='';
  phone:string='';
  message:string='';
  pictures:any=[];
  addpicimg:any="assets/addpic.png";

  constructor(public alertCtrl:AlertController,public loadingCtrl:LoadingController,public firebase:Firebase,public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryPage');
  }
  addPic(){
    var cameraOptions = {
      quality: 50,
      destinationType: 0,
      sourceType: 1,
      allowEdit: true,
      encodingType: 1,
      targetWidth: 200,
      targetHeight: 200,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };
    Camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      var pic = 'data:image/jpeg;base64,' + imageData;
      //add this pic to the array of pictures
      this.pictures.push(pic);
    }, (err) => {
      // Handle error
    });
  }
  submitInquiry(){
    /*this.name;
    this.email;
    this.phone;
    this.message;
    this.pictures; //pictures is an array of all attached pictures
    */

    //first check for empty fields

    if(this.name.length<2){
      let toast = this.toastCtrl.create({
        message: 'Enter a valid name',
        duration: 3000
      });
      toast.present();
      return;
    }

    var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //console.log(emailregex.test(this.data.Email));
    if(!emailregex.test(this.email)){
      let toast5 = this.toastCtrl.create({
        message: 'Enter a valid email address',
        duration: 3000
      });
      toast5.present();
      return null;
    }

    if(this.phone.length<4){
      let toast = this.toastCtrl.create({
        message: 'Enter a valid phone number',
        duration: 3000
      });
      toast.present();
      return;
    }
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    this.firebase.addInquiry(this.name,this.email,this.phone,this.message,this.pictures).subscribe(
      data=>{
        console.log("Data successfully sent to firebase");
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Order Sent!',
          subTitle: 'Your inquiry has been sent',
          buttons: ['OK']
        });
        alert.present();
      },
      err=>{
        console.log("Error sending data to firebase");
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error occurred!',
          subTitle: 'An error occured while sending inquiry... Please Try again',
          buttons: ['OK']
        });
        alert.present();
      }
    );

  }

}
