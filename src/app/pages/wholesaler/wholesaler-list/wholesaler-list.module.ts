import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WholesalerListPage } from './wholesaler-list.page';

const routes: Routes = [
  {
    path: '',
    component: WholesalerListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WholesalerListPage]
})
export class WholesalerListPageModule {}
