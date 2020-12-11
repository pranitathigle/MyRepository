import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RADUILibraryModule} from '../../../../radui-library/src/lib/radui-library.module';
import { RadioModule } from '../../../../radui-library/src/lib/radio/radio.module';
import { DropdownModule } from '../../../../radui-library/src/lib/dropdown/dropdown.module';
import { AccordionModule } from '../../../../radui-library/src/lib/accordion/accordion.module';
import { CheckboxModule } from '../../../../radui-library/src/lib/checkbox/checkbox.module';
import { DynamicComponent } from './dynamic.component';
import { ButtonModule } from '../../../../radui-library/src/lib/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '../../../../radui-library/src/lib/text-field/text-field.module';



@NgModule({
  declarations: [DynamicComponent],
  imports: [
    CommonModule,
    RADUILibraryModule,
    RadioModule,
    DropdownModule,
    AccordionModule,
    CheckboxModule,
    ButtonModule,FormsModule,ReactiveFormsModule,
    TextFieldModule
  ]
  
})
export class DynamicModule { }
