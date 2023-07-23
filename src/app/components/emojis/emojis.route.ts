import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojisComponent } from './emojis.component';

const routes: Routes = [
  {
    path: '', component: EmojisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojisRoutingModule { }