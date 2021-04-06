import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {HomepageRoutingModule} from './homepage-routing.module';
import {PokemonListModule} from '../../shared/pokemon-list/pokemon-list.module';
import {RequestService} from '../../utils/services/request.service';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    PokemonListModule
  ],
  providers: [
    RequestService
  ]
})
export class HomepageModule { }
