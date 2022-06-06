import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeV2PageRoutingModule } from './home-v2-routing.module';

import { HomeV2Page } from './home-v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeV2PageRoutingModule
  ],
  declarations: [HomeV2Page]
})
export class HomeV2PageModule {}
