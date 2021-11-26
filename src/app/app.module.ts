import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { CalculatorService } from './services/calculator.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { ApodService } from './services/apod.service';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { ApodShowComponent } from './components/apod/apod-show/apod-show.component';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { BeersService } from './services/beers.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyboardComponent,
    DisplayComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroFormComponent,
    ApodComponent,
    ApodShowComponent,
    ApodPickerComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, HttpClientModule, YouTubePlayerModule
  ],
  providers: [CalculatorService, HeroesService, ApodService, BeersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
