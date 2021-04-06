import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../utils/services/local-storage.service';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  pokemons: IPokemon[];

  constructor(
    private storage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.pokemons = this.storage.getPokes();
  }
}
