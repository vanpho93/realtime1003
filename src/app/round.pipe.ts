import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, isCeil: boolean): number {
    if (isCeil) {
      return Math.ceil(value);
    }
    return Math.floor(value);
  }

}
