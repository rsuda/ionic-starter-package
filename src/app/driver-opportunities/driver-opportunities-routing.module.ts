import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverOpportunitiesPage } from './driver-opportunities.page';

const routes: Routes = [
  {
    path: '',
    component: DriverOpportunitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverOpportunitiesPageRoutingModule {}
