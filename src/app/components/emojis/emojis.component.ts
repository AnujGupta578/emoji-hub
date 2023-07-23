import { Component } from '@angular/core';

import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { EmojisModel } from '../../model/emoji/emoji.model';
import { EmojisService } from '../../services/emojis/emojis.service';

@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.scss']
})
export class EmojisComponent {
  emojis!: EmojisModel[];
  emojiCategory!: Set<string>;
  searchText = '';
  emojiCatOption: string = '';
  gridCols!: number;
  page = 1;
  paginationEnable: boolean = false;
  paginationData: EmojisModel[] = [];
  constructor(private emojisService: EmojisService, private responsive: BreakpointObserver) {

  }

  ngOnInit() {
    this.emojisService.getAllEmojis().subscribe(res => {
      this.emojis = EmojisModel.getAllEmojis(res);
      this.emojiCategory = EmojisModel.getEmojiCategories(res);
      this.paginationEnable = true;
      this.pageEvent(1);
    });

    this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Tablet,
      Breakpoints.Handset,
      Breakpoints.Web
    ]).subscribe((result: BreakpointState) => {
      const breakpoints = result.breakpoints;

      if (breakpoints[Breakpoints.XSmall]) {
        this.gridCols = 2;
      } else if (breakpoints[Breakpoints.Small]) {
        this.gridCols = 3;
      } else if (breakpoints[Breakpoints.Medium]) {
        this.gridCols = 4;
      } else if (breakpoints[Breakpoints.Large]) {
        this.gridCols = 10;
      } else if (breakpoints[Breakpoints.XLarge]) {
        this.gridCols = 12;
      } else if (breakpoints[Breakpoints.Tablet]) {
        this.gridCols = 6;
      } else if (breakpoints[Breakpoints.Handset]) {
        this.gridCols = 4;
      } else {
        this.gridCols = 12;
      }
    });
  }

  pageEvent(pageNumber: number): void {
    this.page = pageNumber;

    if (!this.page) {
      this.page = 1;
    }

    const index = (this.page - 1) * 10;
    const itemsLength = this.page * 10;

    this.paginationData = [];
    for (let i = index; i < itemsLength; i++) {
      if (!this.emojis[i]) {
        return;
      }
      this.paginationData.push(this.emojis[i]);
    }
  }
}
