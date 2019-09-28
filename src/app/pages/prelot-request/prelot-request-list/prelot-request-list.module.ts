import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrelotRequestListPage } from './prelot-request-list.page';

const routes: Routes = [
  {
    path: '',
    component: PrelotRequestListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrelotRequestListPage]
})
export class PrelotRequestListPageModule {}
