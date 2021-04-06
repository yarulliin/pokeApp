import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {RequestService} from '../../utils/services/request.service';
import {mergeMap} from 'rxjs/operators';
import {timer} from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  pokemons: IPokemon[] = [];

  constructor(
    private request: RequestService,
    private changeDetector: ChangeDetectorRef
  ) { }

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
      .subscribe(data => {
        this.pokemons = [...this.pokemons, data];
        this.changeDetector.markForCheck();
      });
  }
}
