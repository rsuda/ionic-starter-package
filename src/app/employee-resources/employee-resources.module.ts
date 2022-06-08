import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeResourcesPageRoutingModule } from './employee-resources-routing.module';

import { EmployeeResourcesPage } from './employee-resources.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeResourcesPageRoutingModule
  ],
  declarations: [EmployeeResourcesPage]
})
export class EmployeeResourcesPageModule {}
