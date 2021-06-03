import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPagePageRoutingModule } from './error-page-routing.module';

import { ErrorPagePage } from './error-page.page';
import{ ComponentsModule } from '../component.module';
import{ Component1Module } from '../component1.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPagePageRoutingModule,
    Component1Module,
    ComponentsModule
  ],
  declarations: [ErrorPagePage]
})
export class ErrorPagePageModule {}
