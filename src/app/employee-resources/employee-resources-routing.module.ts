import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeResourcesPage } from './employee-resources.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeResourcesPageRoutingModule {}
