import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'number') {
      return value.toFixed(2) + '%';
    }
    else {
      console.error('AbvPipe: value is not a number: "' + value + '" is type: ' + typeof value);
      
    }
    return value;
  }

}
