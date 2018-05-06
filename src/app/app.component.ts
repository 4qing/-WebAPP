import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {WelcomePage} from '../pages/welcome/welcome';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage) {
    // this.storage.get('firstIn').then((result)=> {
    //   console.log('firstIn is',result);
    //   //result=false;
    //   if(result) {
    //     this.rootPage=TabsPage;
    //   }else {
    //     this.storage.set('firstIn',true);
    //     this.rootPage=WelcomePage;
    //   }
    // })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
