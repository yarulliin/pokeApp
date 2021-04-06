import { Injectable } from '@angular/core';
import {IPokemon} from '../interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getPokes(): IPokemon[] {
    const storage = localStorage.getItem('pokemons');
    return storage ? JSON.parse(storage) : [];
  }

  setPoke(poke: IPokemon): void {
    const storage = localStorage.getItem('pokemons');
    try {
      if (storage) {
        if (!this.findPoke(poke)) {
          localStorage.setItem('pokemons', JSON.stringify([...JSON.parse(storage), poke]));
        }
      }
      else {
        localStorage.setItem('pokemons', JSON.stringify([poke]));
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  removePoke(poke: IPokemon): void {
    const storage = localStorage.getItem('pokemons');
    if (storage) {
      const pokemons = JSON.parse(storage);
      const res = pokemons.filter((el: IPokemon) => el.name !== poke.name);
      localStorage.setItem('pokemons', JSON.stringify([...res]));
    }
  }

  private findPoke(poke: IPokemon): boolean {
    const storage = localStorage.getItem('pokemons');
    return storage ? JSON.parse(storage).find((el: IPokemon) => el.name === poke.name) : false;
  }
}
