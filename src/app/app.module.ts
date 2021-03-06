import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Top10Page } from '../pages/top10/top10';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { AttractionDetailPage } from '../pages/attraction-detail/attraction-detail';
import { FavouritesPage } from '../pages/favourites/favourites';
import { VisitedPage } from '../pages/visited/visited';
import { PreplannedPage } from '../pages/preplanned/preplanned';
import { RoutesPage } from '../pages/routes-detail/routes-detail';

import { HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader (http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Top10Page,
    SettingsPage,
    SearchPage,
    AttractionDetailPage,
    FavouritesPage,
    VisitedPage,
    PreplannedPage,
    RoutesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }

    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Top10Page,
    SettingsPage,
    SearchPage,
    AttractionDetailPage,
    FavouritesPage,
    VisitedPage,
    PreplannedPage,
    RoutesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



