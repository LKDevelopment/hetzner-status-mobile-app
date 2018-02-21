import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {OneSignal} from "@ionic-native/onesignal";
import {Storage} from "@ionic/storage";
import {HetznerStatusProvider} from "../../providers/hetzner-status/hetzner-status";

/**
 * Generated class for the HetznerStatusSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-hetzner-status-setting',
  templateUrl: 'hetzner-status-setting.html',
})
export class HetznerStatusSettingPage {

  public tags: any = [];
  public _send: boolean;
  public save: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, protected oneSignal: OneSignal, protected storage: Storage, protected platform: Platform, protected statusProvider: HetznerStatusProvider) {
    this.getTags();
    this.storage.get('hetzner_status_settings_v2').then((data) => {
      if(data != undefined && data != null){
        this.save = data;
      }
    })
  }

  getTags() {
    this.statusProvider.getTags().then((data) => {
      this.tags = Object.keys(data).map(key => data[key])
    });
  }
  saveTags(){
    this._send = false;
    let prompt = false;
    this.save.forEach((value, key) => {
      this.oneSignal.sendTag(key, "" + value);
      if (value == true) {
        prompt = true;
      }
    });
    this._send = true;
    if (prompt && this.platform.is('ios')) {
      this.oneSignal.promptForPushNotificationsWithUserResponse();
    }
    this.storage.set('hetzner_status_settings_v2', this.save);
  }
  /*save() {

  } */
}
