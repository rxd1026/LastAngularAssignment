import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiCallService } from './api-call.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { BodyMainComponent } from './body-main/body-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    BodyMainComponent,
    FooterMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
