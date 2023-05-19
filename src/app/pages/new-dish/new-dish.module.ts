import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDishPageRoutingModule } from './new-dish-routing.module';

import { NewDishPage } from './new-dish.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDishPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [NewDishPage]
})
export class NewDishPageModule {}
