import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { StartComponent } from './components/start/start.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent

  ],
    imports: [

        HttpClientModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatChipsModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
