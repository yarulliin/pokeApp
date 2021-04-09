import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from '../../utils/services/local-storage.service';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {PokeSearchService} from '../../utils/services/poke-search.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();

  pokemons: IPokemon[];

  constructor(
    private storage: LocalStorageService,
    private changeDetector: ChangeDetectorRef,
    private searchService: PokeSearchService
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    this.searchService.searchValue$.next('');
    this.destroy$.next();
    this.destroy$.complete();
  }

  initData(): void {
    this.pokemons = this.storage.getPokes();

    this.searchService.searchValue$.pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(poke => {
        //this.pokemons = this.pokemons.filter(((el: IPokemon) => el.name.toLowerCase().includes(poke.toLowerCase())));
        this.pokemons = this.searchService.searchPoke(this.pokemons, poke);
        this.changeDetector.markForCheck();
      });
  }

  search(): void {
    this.pokemons = this.searchService.searchPoke(this.pokemons, 'name');
  }
}
