import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectItemPageRoutingModule } from './project-item-routing.module';

import { ProjectItemPage } from './project-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectItemPageRoutingModule
  ],
  declarations: [ProjectItemPage]
})
export class ProjectItemPageModule {}
