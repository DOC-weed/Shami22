import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BajasPage } from './bajas.page';
import {PipesModule} from "../filtro/pipes.module";

const routes: Routes = [
  {
    path: '',
    component: BajasPage
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
  declarations: [BajasPage]
})
export class BajasPageModule {}
