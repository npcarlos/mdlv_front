import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WholesalerNewPage } from './wholesaler-new.page';

const routes: Routes = [
  {
    path: '',
    component: WholesalerNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WholesalerNewPage]
})
export class WholesalerNewPageModule {}
