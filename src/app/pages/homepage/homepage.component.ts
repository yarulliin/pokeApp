import {Component, Input, OnInit} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {RequestService} from '../../utils/services/request.service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pokemons: IPokemon[] = [];

  constructor(private request: RequestService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.request.getPokemonList()
      .pipe(
        mergeMap(({url}) => {
          const [_, pokemonID] = url.split('/').reverse();
          return this.request.getPokemon(pokemonID);
        })
      )
      .subscribe(data => this.pokemons.push(data));
  }
}
