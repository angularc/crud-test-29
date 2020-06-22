import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterHomeComponent } from './master-home/master-home.component';
import { SweetHomeDataComponent } from './master-home/sweet-home-data/sweet-home-data.component';
import { SweetHomeListComponent } from './master-home/sweet-home-list/sweet-home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterHomeComponent,
    SweetHomeDataComponent,
    SweetHomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
