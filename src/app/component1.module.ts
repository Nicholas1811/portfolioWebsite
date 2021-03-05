import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations:[FooterComponent],
    exports:[FooterComponent],
    imports:[CommonModule,
        IonicModule]
})
export class Component1Module{}