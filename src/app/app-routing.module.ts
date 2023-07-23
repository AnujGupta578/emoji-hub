import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'emoji',
    loadChildren: () => import('./components/emojis/emojis.module').then(m => m.EmojisModule)
  },
  {
    path: '**',
    redirectTo: 'emoji'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
