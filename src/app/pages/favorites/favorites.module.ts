import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoritesComponent} from './favorites.component';
import {FavoritesRoutingModule} from './favorites-routing.module';
import {PokemonListModule} from '../../shared/pokemon-list/pokemon-list.module';



@NgModule({
  declarations: [FavoritesComponent],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        PokemonListModule
    ]
})
export class FavoritesModule { }
