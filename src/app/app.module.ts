import { Units } from './../pages/units/units';
import { NewListPage } from './../pages/newlist/newlist';
import { ArmyPage } from './../pages/army/army';
import { Factions } from './../pages/factions/factions';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {File, FileSystem,FileReader} from '@ionic-native/file';

import {ArmyBuilderService} from '../armybuilderservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ArmyPage,
    NewListPage,
    Units,
    Factions
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ArmyPage,
    NewListPage,
    Units,
    Factions
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArmyBuilderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File
  ]
})
export class AppModule {}
