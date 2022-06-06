import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'trip-details',
    loadChildren: () => import('../trip-details/trip-details.module').then(m => m.TripDetailsPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
