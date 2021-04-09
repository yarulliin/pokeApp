import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {LocalStorageService} from '../../utils/services/local-storage.service';
import {PokeSearchService} from '../../utils/services/poke-search.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: IPokemon[];
  @Input() showFav: boolean;
  @Output() pokeListEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private storage: LocalStorageService) { }

  ngOnInit(): void {
  }

  toFav(poke: IPokemon): void {
    this.storage.setPoke(poke);
    this.pokeListEmitter.emit();
  }

  remove(poke: IPokemon): void {
    this.storage.removePoke(poke);
    this.pokeListEmitter.emit();
  }
}
