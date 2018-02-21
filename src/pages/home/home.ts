import {Component} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {HetznerStatusProvider} from "../../providers/hetzner-status/hetzner-status";
import {HetznerStatusSettingPage} from "../hetzner-status-setting/hetzner-status-setting";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public messages: any = [];
  constructor(public navCtrl: NavController, protected statusApi: HetznerStatusProvider, protected browser: InAppBrowser, public loadingCtrl: LoadingController) {
    this.load();
  }

  openSettings() {
    this.navCtrl.push(HetznerStatusSettingPage);
  }

  public refresh(refresher) {
    this.load();
    refresher.complete();
  }

  public load() {
    let loader = this.loadingCtrl.create();
    loader.present().then(() => {
      this.statusApi.getStatus().then((data) => {
        this.messages = data;
        loader.dismiss();

      }, (error) => {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          alert('An error occurred:' + error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          alert(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        loader.dismiss();
      });
    });
  }

  public openPage(url: string) {
    this.browser.create(url).show();
  }
}
