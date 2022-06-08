import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentJobPage } from './current-job.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentJobPageRoutingModule {}
