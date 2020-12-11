import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RADUILibraryModule} from '../../../../radui-library/src/lib/radui-library.module';
import { RadioModule } from '../../../../radui-library/src/lib/radio/radio.module';
import { DropdownModule } from '../../../../radui-library/src/lib/dropdown/dropdown.module';
import { AccordionModule } from '../../../../radui-library/src/lib/accordion/accordion.module';
import { CheckboxModule } from '../../../../radui-library/src/lib/checkbox/checkbox.module';
import { ButtonModule } from '../../../../radui-library/src/lib/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGeneratorComponent } from './form-generator.component';
import { FormEngineModule } from '../../../../radui-library/src/lib/form-engine/form-engine.module';
import { TextareaModule } from '../../../../radui-library/src/lib/textarea/textarea.module';
import { FormHelperModule } from '../../../../radui-library/src/lib/form-helper/form-helper.module';



@NgModule({
  declarations: [FormGeneratorComponent],
  imports: [
    CommonModule,
    RADUILibraryModule,
    RadioModule,
    DropdownModule,
    AccordionModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormEngineModule,
    TextareaModule,FormHelperModule
  ]
})
export class FormGeneratorModule { }
