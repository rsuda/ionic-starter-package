import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentJobPageRoutingModule } from './current-job-routing.module';

import { CurrentJobPage } from './current-job.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentJobPageRoutingModule
  ],
  declarations: [CurrentJobPage]
})
export class CurrentJobPageModule {}
