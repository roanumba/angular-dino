import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
        return "";
    }
    value = value.toString();
    return "https://en.wikipedia.org/wiki/" + value;
  }

}
