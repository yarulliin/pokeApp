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

  removePoke(name: string): void {
    const storage = localStorage.getItem('pokemons');
    if (storage) {
      const pokemons = JSON.parse(storage);

      pokemons.map((el: IPokemon, i: number) => {
        if (el.name === name) {
          pokemons.splice(i, 1);
        }
      });

      //filter
      localStorage.setItem('pokemons', JSON.stringify([pokemons]));
    }
  }

  private findPoke(poke: IPokemon): boolean {
    const storage = localStorage.getItem('pokemons');
    if (storage) {
      return JSON.parse(storage).find((el: IPokemon) => el.name === poke.name);
    }
    else {
      return false;
    }

    // тернарный оператор
  }
}
