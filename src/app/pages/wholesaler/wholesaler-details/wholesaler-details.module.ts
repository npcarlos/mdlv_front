import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WholesalerDetailsPage } from './wholesaler-details.page';

const routes: Routes = [
  {
    path: '',
    component: WholesalerDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WholesalerDetailsPage]
})
export class WholesalerDetailsPageModule {}
