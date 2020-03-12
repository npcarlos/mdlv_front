import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PresentationFormComponent } from './presentation-form/presentation-form.component';
import { MapsFormComponent } from './maps-form/maps-form.component';

@NgModule({
    declarations: [
      PresentationFormComponent,
      MapsFormComponent
    ],
    exports:[
        PresentationFormComponent,
        MapsFormComponent
    ],
    imports:[
      CommonModule,
      FormsModule,
      IonicModule
    ]
})
export class ComponentsModule{}