import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ConfirmlocPage } from '../confirmloc/confirmloc';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  @ViewChild('map_container') map_container: ElementRef;
  map: any;
  status: String;
  num: String;
  info: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.status= this.navParams.get('status');
    this.num = this.navParams.get('num');
    this.info = this.navParams.get('info');
  }

  ionViewDidLoad() {
    this.load();
    console.log("status",this.status);

  }
  load() {
    this.map = new AMap.Map(this.map_container.nativeElement,{
      zoom:11,
      rotateEnable: true,
      showBuildingBlock: true,
  });
    setTimeout(()=>{
      this.confirmAlert();
    },5000)
  }
  confirmAlert() {
    let alert = this.alertCtrl.create({
      title: '确认投放',
      message: '无人机已到达指定地点,并确认安全,请确认投放!',
      buttons: [
        {
          text: '取消投放',
          role: 'cannel',
          handler: ()=>{
            console.log('取消投放!');
          },
        },
        {
          text: "查看位置",
          handler: () => {
            this.navCtrl.push(ConfirmlocPage);
          }
        }
      ],
    });
    alert.present();
  }

}
