import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/components/heroes/heroes/heroes.component';

const routes: Routes = [
  {
      path: '',
      component: HeroesComponent
  }];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesModule { }
