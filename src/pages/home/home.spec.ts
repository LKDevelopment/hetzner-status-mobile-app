import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {HomePage} from './home';
import {IonicModule, NavController, Platform} from 'ionic-angular/index';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PlatformMock, SplashScreenMock, StatusBarMock} from '../../../test-config/mocks-ionic';
import {HetznerStatusProvider} from "../../providers/hetzner-status/hetzner-status";
import {HetznerStatusProviderMock} from "../../providers/hetzner-status/hetzner-status.mock";
import {HttpClientModule} from "@angular/common/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {InAppBrowserMock} from "@ionic-native-mocks/in-app-browser";
describe('Home Page', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
        HttpClientModule
      ],
      providers: [
        NavController,
        {provide: Platform, useClass: PlatformMock},
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: HetznerStatusProvider, useClass: HetznerStatusProviderMock},
        {provide:InAppBrowser, useClass:InAppBrowserMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());
});
