import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectItemPage } from './project-item.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectItemPageRoutingModule {}
