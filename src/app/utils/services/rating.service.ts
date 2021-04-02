import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class RatingService {
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  plus(): void {
    const temp = this.counter.value + 1;
    this.counter.next(temp);
  }

  minus(): void {
    const temp = this.counter.value - 1;
    this.counter.next(temp);
  }
}
