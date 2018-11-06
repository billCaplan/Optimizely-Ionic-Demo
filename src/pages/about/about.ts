import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public global: GlobalProvider) {
    this.username = global.decisionEngine.activate('ionic_example', global.userID);
  }


  sendOptlyClick(){
    this.global.decisionEngine.track('eventHappened', this.global.userID);
  };

}
