import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeV3Page } from './home-v3.page';

const routes: Routes = [
  {
    path: '',
    component: HomeV3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeV3PageRoutingModule {}
