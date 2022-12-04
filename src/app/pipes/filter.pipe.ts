// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterByNamePipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    items.forEach(
      it=>it.name= it.firstname+""+it.lastname
    )
    return items.filter((it) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
};
