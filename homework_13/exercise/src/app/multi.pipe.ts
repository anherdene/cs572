import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi'
})
export class MultiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value+value+value;
  }

}
