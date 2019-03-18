import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'undercase'
})
export class UndercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
        return "";
    }
    value = value.toString();
    return value.toLowerCase();
  }

}
