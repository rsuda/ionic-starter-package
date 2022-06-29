import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationFeedbackPageRoutingModule } from './location-feedback-routing.module';

import { LocationFeedbackPage } from './location-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationFeedbackPageRoutingModule
  ],
  declarations: [LocationFeedbackPage]
})
export class LocationFeedbackPageModule {}
