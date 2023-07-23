import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


import { FilterPipe, SelectFilterPipe } from './pipes/filter.pipe';
import { SafeSrc } from './pipes/safe-src';

const module = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
]

const pipes = [SafeSrc, FilterPipe, SelectFilterPipe]
@NgModule({
  declarations: [...pipes],
  imports: [
    ...module
  ],
  exports: [
    ...module,
    ...pipes
  ]
})
export class SharedModule { }