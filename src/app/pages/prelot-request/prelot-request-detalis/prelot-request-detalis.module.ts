import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrelotRequestDetalisPage } from './prelot-request-detalis.page';

const routes: Routes = [
  {
    path: '',
    component: PrelotRequestDetalisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrelotRequestDetalisPage]
})
export class PrelotRequestDetalisPageModule {}
