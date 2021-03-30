import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  counter = 0;

  constructor() { }

  plus(): number {
    return this.counter++;
  }

  minus(): number {
    return this.counter--;
  }
}
