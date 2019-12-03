import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'altas', loadChildren: './altas/altas.module#AltasPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'angular', loadChildren: './angular/angular.module#AngularPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'global', loadChildren: './global/global.module#GlobalPageModule' },
  { path: 'subsidiary', loadChildren: './subsidiary/subsidiary.module#SubsidiaryPageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },  { path: 'bajas', loadChildren: './bajas/bajas.module#BajasPageModule' },
  { path: 'car', loadChildren: './car/car.module#CarPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
