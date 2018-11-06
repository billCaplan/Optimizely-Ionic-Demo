import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public global: GlobalProvider) {
    var decision = global.decisionEngine.activate('ionic_example', global.userID);
    if(decision = "var_a"){
      this.header = "You are in Variation A"
    } else {
      this.header = "You are in Variation B"
    }
  }


  sendOptlyClick(){
    this.global.decisionEngine.track('eventHappened', this.global.userID);
  };

}
