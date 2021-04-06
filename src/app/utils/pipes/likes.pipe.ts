import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'like'
})
export class LikesPipe implements PipeTransform {
  transform(value: number | null): string {
    const checkedValue = value ?? 0;
    if (Math.abs(checkedValue) < 10 || Math.abs(checkedValue) > 20) {
      switch (Math.abs(checkedValue) % 10) {
        case 1:
          return `${checkedValue} Лайк`;
        case 2:
          return `${checkedValue} Лайка`;
        case 3:
          return `${checkedValue} Лайка`;
        case 4:
          return `${checkedValue} Лайка`;
        default:
          return `${checkedValue} Лайков`;
      }
    }
    else {
      return `${checkedValue} Лайков`;
    }
  }
}
