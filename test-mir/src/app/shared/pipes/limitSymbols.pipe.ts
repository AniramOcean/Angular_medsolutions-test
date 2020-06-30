import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitSymbols'
})
export class LimitSymbolsPipe implements PipeTransform {
  transform(str, limit = 200) {

    if (str.length > limit) {
      return str.slice(0, limit) + '...';
    }
    return str;

  }
}
