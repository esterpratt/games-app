import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimonComponent } from './simon/simon.component';
import { ColorPickComponent } from './simon/color-pick/color-pick.component';
import { SimonConsoleComponent } from './simon/simon-console/simon-console.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SimonComponent,
    ColorPickComponent,
    SimonConsoleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
