import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { DivisaComponent } from './component/divisa/divisa.component';
import {HttpClientModule} from '@angular/common/http';
import { HoroscopoComponent } from './component/horoscopo/horoscopo.component';
import { PortalComponent } from './component/portal/portal.component';//añadido
import { FormsModule } from '@angular/forms';
import { QrComponent } from './component/qr/qr.component';
import { ClimacComponent } from './component/climac/climac.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DivisaComponent,
    HoroscopoComponent,
    PortalComponent,
    QrComponent,
    ClimacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,///añadido
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
