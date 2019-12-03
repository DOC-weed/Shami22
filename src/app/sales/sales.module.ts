import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalesPage } from './sales.page';
import {PipesModule} from "../filtro/pipes.module";

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        PipesModule
    ],
  declarations: [SalesPage]
})
export class SalesPageModule {}
