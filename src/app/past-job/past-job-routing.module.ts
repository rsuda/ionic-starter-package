import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastJobPage } from './past-job.page';

const routes: Routes = [
  {
    path: '',
    component: PastJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastJobPageRoutingModule {}
