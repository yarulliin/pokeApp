import {Component, Input, OnInit} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: IPokemon[];

  constructor() { }

  ngOnInit(): void {
  }
}
