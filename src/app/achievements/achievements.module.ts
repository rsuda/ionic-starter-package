import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchievementsPageRoutingModule } from './achievements-routing.module';

import { AchievementsPage } from './achievements.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementsPageRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "percent": 80,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#3369B4",
      "outerStrokeGradientStopColor": "#3369B4",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "800",
      "subtitle": "Your Points",
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
  declarations: [AchievementsPage]
})
export class AchievementsPageModule {}
