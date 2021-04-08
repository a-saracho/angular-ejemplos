import { TituloComponent } from './titulo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MayusculadorPipe } from './mayusculador.pipe';
import { FosforitoDirective } from './fosforito.directive';
import { AnoserqueDirective } from './anoserque.directive';
import { HijoComponent } from './hijo/hijo.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MayusculadorPipe,
    FosforitoDirective,
    AnoserqueDirective,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
