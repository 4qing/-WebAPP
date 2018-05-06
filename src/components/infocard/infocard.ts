import { Component,Input, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the InfocardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'infocard',
  templateUrl: 'infocard.html',
  
})
export class InfocardComponent {
  @Input() status: String;
  @Input() trackingNumber: String;
  @Input() packageName: String;
  @Output() event = new EventEmitter();
  color: String;
  constructor() {
    if(this.status==="运输中") {
      this.color="green";
    }else if(this.status==="已完成")　{
      this.color="blue";
    }else if(this.status==="准备中") {
      this.color="red";
    }
  }
 
  ionViewDidLoad() {
  }
  upward(){
    this.event.emit({
      status: this.status,
      num: this.trackingNumber,
      name: this.packageName,
    });
  }
}
