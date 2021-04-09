import { Injectable } from '@angular/core';
import {IPokemon} from '../interfaces/poke.interfaces';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeSearchService {

  searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  searchPoke(poke: IPokemon[], pokeName: string): IPokemon[] {
    if (!pokeName.trim()) {
      return poke;
    }
    return poke.filter((el: IPokemon) => el.name.toLowerCase().includes(pokeName.toLowerCase()));
  }
}
