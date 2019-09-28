import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrelotRequestNewPage } from './prelot-request-new.page';

const routes: Routes = [
  {
    path: '',
    component: PrelotRequestNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrelotRequestNewPage]
})
export class PrelotRequestNewPageModule {}
