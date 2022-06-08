import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastJobPageRoutingModule } from './past-job-routing.module';

import { PastJobPage } from './past-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastJobPageRoutingModule
  ],
  declarations: [PastJobPage]
})
export class PastJobPageModule {}
