import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'contactme',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'portfolio/project-item',
    loadChildren: () => import('./project-item/project-item.module').then(m => m.ProjectItemPageModule)
  },
  //add page.
  {
    path: '**',
    redirectTo: 'error-page',
    pathMatch: 'full'
  },
  {
    path: 'error-page',
    loadChildren: () => import('./error-page/error-page.module').then( m => m.ErrorPagePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
