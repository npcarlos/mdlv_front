import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderNewPage } from './order-new.page';
import { ComponentsModule } from 'src/app/shared/components.module';

const routes: Routes = [
  {
    path: '',
    component: OrderNewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderNewPage]
})
export class OrderNewPageModule {}
