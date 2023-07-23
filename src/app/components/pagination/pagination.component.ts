import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface NumberedPagination {
  index: number;
  maxPages: number;
  pages: number[];
}

export enum RulerFactoryOption {
  Start = 'START',
  End = 'END',
  Default = 'DEFAULT',
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('data') data!: Array<any>
  maxPages: number = 0;

  @Input() index: number = 1;
  @Input() totalCount!: number;
  @Input() pageSize: number = 10;
  @Input() rulerLength: number = 5;

  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.totalCount = this.data && this.data.length;
    this.maxPages = Math.ceil(this.totalCount / this.pageSize);
  }


  get pagination(): NumberedPagination {
    const { index, maxPages, rulerLength } = this;
    const pages = ruler(index, maxPages, rulerLength);
    return { index, maxPages, pages } as NumberedPagination;
  }

  navigateToPage(pageNumber: number): void {
    if (allowNavigation(pageNumber, this.index, this.maxPages)) {
      this.index = pageNumber;
      this.page.emit(this.index);
    }
  }

  trackByFn(index: number): number {
    return index;
  }
}

const ruler = (currentIndex: number, maxPages: number, rulerLength: number): number[] => {
  const array = new Array(rulerLength).fill(null);
  const min = Math.floor(rulerLength / 2);
  const numArr = array.map((_, index) =>
    rulerFactory(currentIndex, index, min, maxPages, rulerLength)
  );
  return numArr;
};

const rulerOption = (currentIndex: number, min: number, maxPages: number): RulerFactoryOption => {
  const option = currentIndex <= min ? RulerFactoryOption.Start
    : currentIndex >= maxPages - min
      ? RulerFactoryOption.End
      : RulerFactoryOption.Default;
  return option;
};

const rulerFactory = (currentIndex: number, index: number, min: number, maxPages: number, rulerLength: number): number => {
  const factory = {
    [RulerFactoryOption.Start]: () => index + 1,
    [RulerFactoryOption.End]: () => maxPages - rulerLength + index + 1,
    [RulerFactoryOption.Default]: () => currentIndex + index - min,
  };

  return factory[rulerOption(currentIndex, min, maxPages)]();
};

const allowNavigation = (pageNumber: number, index: number, maxPages: number): boolean => {
  return pageNumber !== index && pageNumber > 0 && pageNumber <= maxPages;
};
