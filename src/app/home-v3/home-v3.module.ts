import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeV3PageRoutingModule } from './home-v3-routing.module';

import { HomeV3Page } from './home-v3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeV3PageRoutingModule
  ],
  declarations: [HomeV3Page]
})
export class HomeV3PageModule {}
