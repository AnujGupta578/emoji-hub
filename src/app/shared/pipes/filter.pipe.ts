
import { Pipe, PipeTransform } from '@angular/core';

export interface filterOption {
    eName: string;
    eCat: string;
}

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
     */
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();

        return items.filter(it => {
            return it.eName.toLocaleLowerCase().includes(searchText);
        });
    }
}


@Pipe({ name: 'appSelectFilter' })
export class SelectFilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
     */
    transform(items: any[], eCat: string): any[] {
        if (!items) {
            return [];
        }
        if (!eCat) {
            return items;
        }
        eCat = eCat.toLocaleLowerCase();

        return items.filter(it => {
            return it.eCategory.toLocaleLowerCase().includes(eCat);
        });
    }
}
