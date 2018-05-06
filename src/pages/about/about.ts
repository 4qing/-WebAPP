import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  name: String;
  constructor(public navCtrl: NavController,private storage: Storage) {
      this.storage.get('name').then(result=> {
        this.name= result;
      })

  }

}
