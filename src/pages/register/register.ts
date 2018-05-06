import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


import {Storage} from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  successRegister(name:HTMLInputElement,phone: HTMLInputElement,email: HTMLInputElement,passwd: HTMLInputElement){
    this.storage.set('name',name.value);
    this.storage.set('phone',phone.value);
    this.storage.set('email',email.value);
    this.storage.set('passwd',passwd.value);
    this.navCtrl.setRoot(TabsPage);
  }

}
