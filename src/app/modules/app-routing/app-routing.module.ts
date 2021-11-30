import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from 'src/app/components/apod/apod/apod.component';
import { BeersComponent } from 'src/app/components/beers/beers/beers.component';
import { CalculatorComponent } from 'src/app/components/calculator/calculator/calculator.component';
import { FormsComponent } from 'src/app/components/forms/forms/forms.component';
import { HeroesComponent } from 'src/app/components/heroes/heroes/heroes.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { YourGuard } from 'src/app/guards/your.guard';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'heroes', loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'apod', component: ApodComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'forms', component: FormsComponent, canActivate: [YourGuard] },
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }