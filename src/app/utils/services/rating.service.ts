import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class RatingService {
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }

  increment(): void {
    const temp = this.counter.value + 1;
    this.counter.next(temp);
  }

  decrement(): void {
    const temp = this.counter.value - 1;
    this.counter.next(temp);
  }
}
