import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HetznerStatusProvider} from '../providers/hetzner-status/hetzner-status';
import {OneSignal} from "@ionic-native/onesignal";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {IonicStorageModule} from "@ionic/storage";
import {HetznerStatusSettingPage} from "../pages/hetzner-status-setting/hetzner-status-setting";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HetznerStatusSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HetznerStatusSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HetznerStatusProvider,
    OneSignal,
    InAppBrowser
  ]
})
export class AppModule {
}
