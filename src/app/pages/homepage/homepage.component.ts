import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {RequestService} from '../../utils/services/request.service';
import {mergeMap, takeUntil} from 'rxjs/operators';
import {Subject, timer} from 'rxjs';
import {PokeSearchService} from '../../utils/services/poke-search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  pokemons: IPokemon[] = [];

  constructor(
    private request: RequestService,
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
    this.request.getPokemonList()
      .pipe(
        mergeMap(({url}) => {
          const [_, pokemonID] = url.split('/').reverse();
          return this.request.getPokemon(pokemonID);
        })
      )
      .subscribe(data => {
        this.pokemons = [...this.pokemons, data];
        this.changeDetector.markForCheck();
      });

    this.searchService.searchValue$.pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(poke => {
      //this.pokemons = this.pokemons.filter(((el: IPokemon) => el.name.toLowerCase().includes(poke.toLowerCase())));
      this.pokemons = this.searchService.searchPoke(this.pokemons, poke);
      this.changeDetector.markForCheck();
    });
  }
}
