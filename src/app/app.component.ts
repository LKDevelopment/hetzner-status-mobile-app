import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {OneSignal} from "@ionic-native/onesignal";

@Component({
  templateUrl: 'app.html'
})
export class HetznerStatusApp {
  rootPage: any = HomePage;
  public booted: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, oneSignal: OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      oneSignal.startInit('8a532b21-b859-4af2-ab12-b6a96ec685a6', '893639204227');

      oneSignal.endInit();
      statusBar.styleDefault();
      splashScreen.hide();
      this.booted = true;
    });
  }
}

