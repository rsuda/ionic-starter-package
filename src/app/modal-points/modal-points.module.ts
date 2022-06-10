import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPointsPageRoutingModule } from './modal-points-routing.module';

import { ModalPointsPage } from './modal-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPointsPageRoutingModule
  ],
  declarations: [ModalPointsPage]
})
export class ModalPointsPageModule {}
