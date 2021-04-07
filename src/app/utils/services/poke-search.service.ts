import { Injectable } from '@angular/core';
import {IPokemon} from '../interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeSearchService {

  constructor() {
  }

  searchPoke(poke: IPokemon[], pokeName: string): IPokemon[] {
    return poke.filter((el: IPokemon) => el.name === pokeName);
  }
}
