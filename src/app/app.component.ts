import { Component, OnInit } from '@angular/core';


export interface AppNavLinks {
  isActive: boolean;
  title: string
}

export const navLinks: AppNavLinks[] = [
  {
    isActive: true,
    title: 'emoji'
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'emoji-hub';
  links!: AppNavLinks[];

  constructor() { }


  ngOnInit() {

    this.links = navLinks;

  }
}
