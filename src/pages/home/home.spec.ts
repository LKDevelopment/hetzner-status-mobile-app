import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {HomePage} from './home';
import {IonicModule, LoadingController, NavController, Platform} from 'ionic-angular/index';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PlatformMock, SplashScreenMock, StatusBarMock} from '../../../test-config/mocks-ionic';
import {HetznerStatusProvider} from "../../providers/hetzner-status/hetzner-status";
import {HetznerStatusProviderMock} from "../../providers/hetzner-status/hetzner-status.mock";
import {HttpClientModule} from "@angular/common/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {InAppBrowserMock} from "@ionic-native-mocks/in-app-browser";
import {LoadingControllerMock} from "ionic-mocks";

describe('Home Page', () => {
  let de: DebugElement;
  let de2: DebugElement;
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
        {provide: InAppBrowser, useClass: InAppBrowserMock},
        {provide: LoadingController, useFactory: () => LoadingControllerMock.instance() }
      ]
    }).compileComponents();  // compile template and css;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());
  it('should has two messages from hetzner', fakeAsync(() => {
    comp.load();
    tick();
    fixture.detectChanges();
    expect(comp.messages.length).toBe(2);
    expect(comp.messages[0].id).toBe(252);
    expect(comp.messages[1].id).toBe(253);
  }));
});
