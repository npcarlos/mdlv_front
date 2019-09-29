import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PresentationFormComponent } from './presentation-form/presentation-form.component';

@NgModule({
    declarations: [
      PresentationFormComponent
    ],
    exports:[
        PresentationFormComponent
    ],
    imports:[
      CommonModule,
      FormsModule,
      IonicModule
    ]
})
export class ComponentsModule{}