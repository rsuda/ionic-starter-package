import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafetyPageRoutingModule } from './safety-routing.module';

import { SafetyPage } from './safety.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafetyPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "percent": 80,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#3369B4",
      "outerStrokeGradientStopColor": "#3369B4",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "1,201,770",
      "subtitle": "Safe Miles",
      "subtitleFontSize": "18px",
      "titleFontSize": "40px",
      "titleFontWeight": "700",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": false,
      "showImage": false,
      "imageSrc": "./assets/icon/werner-points.svg",
      "imageHeight": 105,
      "imageWidth": 105,
    })
  ],
  declarations: [SafetyPage]
})
export class SafetyPageModule {}
