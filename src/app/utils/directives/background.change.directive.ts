import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[bg-change]'
})
export class BackgroundChangeDirective {
  @HostBinding('style.backgroundColor') currentColor = 'transparent';

  constructor() {}

  @HostListener('click') Click(): void {
    this.currentColor = `#${this.randomColor()}`;
  }

  randomColor(): number {
    const randomNumber = 100 - 0.5 + Math.random() * (999 - 100 + 1);
    return Math.round(randomNumber);
  }
}
