import { NgModule } from '@angular/core';
import {PokemonListComponent} from './pokemon-list.component';
import {CardModule} from '../card/card.module';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    MatButtonModule
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
