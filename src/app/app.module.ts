import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataAndMethodComponent } from './data-and-method/data-and-method.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { ComputAndWatchComponent } from './comput-and-watch/comput-and-watch.component';
import { ClassStyleBindComponent } from './class-style-bind/class-style-bind.component';
import { FiltersComponent } from './filters/filters.component';
import { CapitalizePipe } from './filters/capitalize.pipe';
import { UndercasePipe } from './filters/undercase.pipe';
import { UrlPipe } from './filters/url.pipe';
import { DinoComponent } from './dino/dino.component';
import { DinoCounterComponent } from './dino/dino-count/dino-counter.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DataAndMethodComponent,
    HomeComponent,
    HelloComponent,
    AboutComponent,
    ComputAndWatchComponent,
    ClassStyleBindComponent,
    FiltersComponent,
    CapitalizePipe,
    UndercasePipe,
    UrlPipe,
    DinoComponent,
    DinoCounterComponent,
    DynamicComponent
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
