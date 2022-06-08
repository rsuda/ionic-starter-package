import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverOpportunitiesPageRoutingModule } from './driver-opportunities-routing.module';

import { DriverOpportunitiesPage } from './driver-opportunities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverOpportunitiesPageRoutingModule
  ],
  declarations: [DriverOpportunitiesPage]
})
export class DriverOpportunitiesPageModule {}
