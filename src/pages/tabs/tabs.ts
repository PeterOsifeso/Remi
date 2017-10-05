import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {DelieveryPage} from "../delievery/delievery";
import {InquiryPage} from "../inquiry/inquiry";
import {InfoPage} from "../info/info";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DelieveryPage;
  tab2Root: any = InquiryPage;
  tab3Root: any = AboutPage;
  tab4Root: any = InfoPage;

  constructor() {

  }
}
