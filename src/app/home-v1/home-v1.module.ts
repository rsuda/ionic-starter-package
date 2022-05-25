import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeV1PageRoutingModule } from './home-v1-routing.module';

import { HomeV1Page } from './home-v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeV1PageRoutingModule
  ],
  declarations: [HomeV1Page]
})
export class HomeV1PageModule {}
