import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'order-list', 
    loadChildren: './pages/order/order-list/order-list.module#OrderListPageModule' 
  },
  { 
    path: 'order-details', 
    loadChildren: './pages/order/order-details/order-details.module#OrderDetailsPageModule' 
  },
  { 
    path: 'order-new', 
    loadChildren: './pages/order/order-new/order-new.module#OrderNewPageModule' 
  },
  {
    path: 'prelot-request-list', 
    loadChildren: './pages/prelot-request/prelot-request-list/prelot-request-list.module#PrelotRequestListPageModule' 
  },
  { 
    path: 'prelot-request-new', 
    loadChildren: './pages/prelot-request/prelot-request-new/prelot-request-new.module#PrelotRequestNewPageModule' 
  },
  {
    path: 'client-new', 
    loadChildren: './pages/client/client-new/client-new.module#ClientNewPageModule' 
  },
  { 
    path: 'client-list', 
    loadChildren: './pages/client/client-list/client-list.module#ClientListPageModule' 
  },
  { 
    path: 'client-details', 
    loadChildren: './pages/client/client-details/client-details.module#ClientDetailsPageModule' 
  },
  { 
    path: 'client-update', 
    loadChildren: './pages/client/client-update/client-update.module#ClientUpdatePageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
