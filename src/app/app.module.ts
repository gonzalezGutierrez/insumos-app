import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { environment} from '../environments/environment';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';

import { ProductShowModalPageModule } from './pages/product-show-modal/product-show-modal.module';


@NgModule({
     declarations: [AppComponent],
     entryComponents: [],
     imports: [
          BrowserModule,
          IonicModule.forRoot(),
          AppRoutingModule,
          BrowserAnimationsModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule,
          ProductShowModalPageModule,
         
     ],
     providers: [
          StatusBar,
          SplashScreen,
          { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
          SQLite,
          SQLitePorter
     ],
     bootstrap: [AppComponent]
})
export class AppModule { }
