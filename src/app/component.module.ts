import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations:[NavComponent],
    exports:[NavComponent],
    imports:[IonicModule,CommonModule]
})
export class ComponentsModule{}