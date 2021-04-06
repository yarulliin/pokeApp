import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {IPokemon} from '../../utils/interfaces/poke.interfaces';
import {LocalStorageService} from '../../utils/services/local-storage.service';
import {RatingService} from '../../utils/services/rating.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [RatingService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() pokemon: IPokemon;

  counter$: BehaviorSubject<number>;
  private destroy$ = new Subject();

  constructor(private rating: RatingService) { }

  ngOnInit(): void {
    this.counter$ = this.rating.counter;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  increase(): void {
    this.rating.increment();
  }

  decrease(): void {
    this.rating.decrement();
  }
}
