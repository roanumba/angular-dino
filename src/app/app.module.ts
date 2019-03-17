import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAndMethodComponent } from './data-and-method/data-and-method.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DataAndMethodComponent,
    HomeComponent,
    HelloComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
