import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrelotRequestDetailsPage } from './prelot-request-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrelotRequestDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrelotRequestDetailsPage]
})
export class PrelotRequestDetailsPageModule {}
