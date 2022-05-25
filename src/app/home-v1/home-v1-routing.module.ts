import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeV1Page } from './home-v1.page';

const routes: Routes = [
  {
    path: '',
    component: HomeV1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeV1PageRoutingModule {}
