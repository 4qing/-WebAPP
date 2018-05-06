import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { WelcomePage } from '../pages/welcome/welcome';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OrderPage } from '../pages/order/order';
import { ComponentsModule } from '../components/components.module';
import { DetailPage } from '../pages/detail/detail';
import { ConfirmlocPage } from '../pages/confirmloc/confirmloc';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    OrderPage,
    DetailPage,
    ConfirmlocPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    WelcomePageModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    RegisterPage,
    OrderPage,
    DetailPage,
    ConfirmlocPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
