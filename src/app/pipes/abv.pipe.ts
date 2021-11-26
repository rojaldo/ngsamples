import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'number') {
      // get decimal part
      const decimal = Math.round(10*(value % 1));
      // get integer part
      const integer = Math.floor(value);
      if(args.length > 0 && typeof args[0] === 'string') {
        return integer.toString()+ ',' + decimal.toString() + args[0];
      }
      return integer.toString()+ ',' + decimal.toString() + '%';
    }
    else {
      console.error('AbvPipe: value is not a number: "' + value + '" is type: ' + typeof value);
      
    }
    return value;
  }

}
