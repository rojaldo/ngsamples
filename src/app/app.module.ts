import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { CalculatorService } from './services/calculator.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { ApodService } from './services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodShowComponent } from './components/apod/apod-show/apod-show.component';
import { ApodPickerComponent } from './components/apod/apod-picker/apod-picker.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { BeersService } from './services/beers.service';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BeerCardComponent } from './components/beers/beer-card/beer-card.component';
import { AbvPipe } from './pipes/abv.pipe';
import { ApodCardComponent } from './components/apod/apod-card/apod-card.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { FormsComponent } from './components/forms/forms/forms.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    BeersComponent,
    BeerCardComponent,
    AbvPipe,
    ApodCardComponent,
    TemplateFormComponent,
    FormsComponent,
    ReactiveFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxSliderModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CalculatorService,
    HeroesService,
    BeersService,
    ApodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
