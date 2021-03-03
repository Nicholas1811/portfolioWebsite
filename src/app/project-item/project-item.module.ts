import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectItemPageRoutingModule } from './project-item-routing.module';

import { ProjectItemPage } from './project-item.page';
import{ ComponentsModule } from '../component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProjectItemPageRoutingModule
  ],
  declarations: [ProjectItemPage]
})
export class ProjectItemPageModule {}
