import { NgModule } from '@angular/core' ;
import { CommonModule } from '@angular/common' ;
import { FormsModule } from '@angular/forms' ;
import { Routes, RouterModule } from '@angular/router' ;

import { IonicModule } from '@ionic/angular' ;

import { GlobalPage } from './global.page';

const routes: Routes = [
  {
    path: '',
    component: GlobalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalPage]
})
export class GlobalPageModule {}
