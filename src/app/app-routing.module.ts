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
    path: 'prelot-request-details', 
    loadChildren: './pages/prelot-request/prelot-request-details/prelot-request-details.module#PrelotRequestDetailsPageModule' 
  },
  { 
    path: 'supply-list', 
    loadChildren: './pages/supply/supply-list/supply-list.module#SupplyListPageModule' 
  },
  { 
    path: 'supply-new', 
    loadChildren: './pages/supply/supply-new/supply-new.module#SupplyNewPageModule' 
  },
  {
    path: 'lot-list', loadChildren: './pages/lot/lot-list/lot-list.module#LotListPageModule'
  },
  { 
    path: 'lot-new', loadChildren: './pages/lot/lot-new/lot-new.module#LotNewPageModule' 
  },
  { 
    path: 'lot-details', loadChildren: './pages/lot/lot-details/lot-details.module#LotDetailsPageModule' 
  },    
  { 
    path: 'stats-list', 
    loadChildren: './pages/stats/stats-list/stats-list.module#StatsListPageModule' 
  },
  { 
    path: 'stats-details', 
    loadChildren: './pages/stats/stats-details/stats-details.module#StatsDetailsPageModule' 
  },
  { 
    path: 'wholesaler-details', 
    loadChildren: './pages/wholesaler/wholesaler-details/wholesaler-details.module#WholesalerDetailsPageModule' 
  },
  { 
    path: 'wholesaler-list', 
    loadChildren: './pages/wholesaler/wholesaler-list/wholesaler-list.module#WholesalerListPageModule' 
  },
  { 
    path: 'wholesaler-new', 
    loadChildren: './pages/wholesaler/wholesaler-new/wholesaler-new.module#WholesalerNewPageModule' 
  },
  {
    path: 'settings-index', 
    loadChildren: './pages/settings/settings-index/settings-index.module#SettingsIndexPageModule' 
  },
  { 
    path: 'product-forecast', 
    loadChildren: './pages/product/product-forecast/product-forecast.module#ProductForecastPageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

