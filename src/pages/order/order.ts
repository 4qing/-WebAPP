import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { card } from './card';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  cards: Array<card>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cards=[new card("运输中","1234588745","宿舍神器,买一送十,假一赔十"),
                new card("已完成","7894563322","开发必备,上门保修,免费升级"),
                new card("准备中","7894563321","开发必备,上门保修,免费升级")]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  getDetail(event) {
    this.navCtrl.push(DetailPage,{
      status: event.status,
      num: event.num,
      info: event.name,
    });
    //console.log("getDetail",event.status);
  }
}
