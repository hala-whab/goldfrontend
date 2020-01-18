import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceFilter',
  pure: false,
})
export class DeviceFilterPipe implements PipeTransform {

  transform(values: [], filter?: any): any {
    if (!values || !filter) {
      return values;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return values.filter(item => this.applyFilter(item, filter));
  }
  applyFilter(item: any, filter: any): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string' && field !== 'status') {
          if (item[field] !== null && item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number' || field === 'status') {

          if (item[field] !== null && item[field] !== parseInt(filter[field]) && filter[field] !== '-1') {
            return false;
          }
        }
      }
    }
    return true;
  }

}
