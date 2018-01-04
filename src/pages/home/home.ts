import {Component, ViewChild} from '@angular/core';
import {NavController, Nav} from 'ionic-angular';
import {Departs} from "../departs/departs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  constructor(public navCtrl: NavController) {

  }

  goToQuestion() {
    this.navCtrl.push(Departs);
  }

}
