import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {IPokeInfo, IPokemon, IPokemonListResult, ITest} from '../interfaces/poke.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  POKEMON_API_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<ITest> {
    return this.http.get<IPokemonListResult>(`${this.POKEMON_API_URL}/pokemon/?limit=10`)
      .pipe(
        map(({results}) => results),
        switchMap(data => from(data))
      );
  }

  getPokemon(poke: number | string): Observable<IPokemon> {
    const url = `${this.POKEMON_API_URL}/pokemon/${poke}`;
    return this.http.get<IPokeInfo>(url)
      .pipe(
        map(({name, sprites: {front_default}}) => ({name, front_default}))
      );
  }
}
