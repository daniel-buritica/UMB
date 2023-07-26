import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (value === null || value === undefined) {
      return '';
    }
    return value.replace(/[-_]+/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toUpperCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}
