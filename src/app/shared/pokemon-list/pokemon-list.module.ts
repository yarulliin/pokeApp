import { NgModule } from '@angular/core';
import {PokemonListComponent} from './pokemon-list.component';
import {CardModule} from '../card/card.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CardModule,
    CommonModule
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
