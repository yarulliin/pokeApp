import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class RatingService {
  counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    console.log(4);
  }

  increment(): void {
    const temp = this.counter.value + 1;
    this.counter.next(temp);
    console.log(2);
  }

  decrement(): void {
    const temp = this.counter.value - 1;
    this.counter.next(temp);
    console.log(3);
  }
}
