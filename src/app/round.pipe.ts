import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, isCeil: boolean, addition: number = 0): number {
    if (isCeil) {
      return Math.ceil(value + addition);
    }
    return Math.floor(value + addition);
  }

}
