import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { DelieveryPage } from '../pages/delievery/delievery';
import { InquiryPage } from '../pages/inquiry/inquiry';
import { CaketypesPage } from '../pages/caketypes/caketypes';
import { ConfirmchoicePage } from '../pages/confirmchoice/confirmchoice';
import { InfoPage } from '../pages/info/info';
import { Firebase } from '../providers/firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    DelieveryPage,
    InquiryPage,
    CaketypesPage,
    ConfirmchoicePage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    DelieveryPage,
    InquiryPage,
    CaketypesPage,
    ConfirmchoicePage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase
  ]
})
export class AppModule {}
