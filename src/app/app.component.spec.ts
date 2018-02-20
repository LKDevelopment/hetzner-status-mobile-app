import {async, TestBed} from '@angular/core/testing';
import {IonicModule, Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HetznerStatusApp} from './app.component';
import {PlatformMock, SplashScreenMock, StatusBarMock} from '../../test-config/mocks-ionic';
import {OneSignal} from "@ionic-native/onesignal";
import {OneSignalMock} from "@ionic-native-mocks/onesignal";
import {Storage} from "@ionic/storage";
import {StorageMock} from "ionic-mocks";


describe('Hetzner Status App', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HetznerStatusApp],
      imports: [
        IonicModule.forRoot(HetznerStatusApp)
      ],
      providers: [
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock},
        {provide: OneSignal, useClass: OneSignalMock},
        {provide: Storage, useClass: StorageMock}
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HetznerStatusApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof HetznerStatusApp).toBe(true);
  });
});
