import { Component } from '@angular/core';
import {RequestService} from './utils/services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeApp';

  constructor() {
    // this.pokemonRequest.getPokemon(1).subscribe(data => console.log(data));
    // this.pokemonRequest.getPokemonList()
    //   .pipe(
    //     tap(data => console.log(data)),
    //     mergeMap(({url}) => {
    //       const [_, pokemonID] = url.split('/').reverse();
    //       return this.pokemonRequest.getPokemon(pokemonID);
    //     })
    //   )
    //   .subscribe(data => console.log(data));
  }
}
