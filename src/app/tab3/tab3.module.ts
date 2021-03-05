import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import{ ComponentsModule } from '../component.module';
import{ Component1Module } from '../component1.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    Tab3PageRoutingModule,
    Component1Module
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
