import { TituloComponent } from './titulo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MayusculadorPipe } from './mayusculador.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MayusculadorPipe
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
