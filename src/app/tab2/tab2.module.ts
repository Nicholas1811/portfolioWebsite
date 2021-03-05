import { IonicModule } from '@ionic/angular';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import{ ComponentsModule } from '../component.module';
import{ Component1Module } from '../component1.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    Tab2PageRoutingModule,
    Component1Module
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
