import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RADUILibraryModule} from '../../../../radui-library/src/lib/radui-library.module';
import { RadioModule } from '../../../../radui-library/src/lib/radio/radio.module';
import { DropdownModule } from '../../../../radui-library/src/lib/dropdown/dropdown.module';
import { AccordionModule } from '../../../../radui-library/src/lib/accordion/accordion.module';
import { AcgDemoComponent } from './acg-demo.component';
import { CheckboxModule } from '../../../../radui-library/src/lib/checkbox/checkbox.module';

@NgModule({
  declarations: [AcgDemoComponent],
  imports: [
    CommonModule,
    RADUILibraryModule,
    RadioModule,
    DropdownModule,
    AccordionModule,
    CheckboxModule
  ]
})
export class AcgDemoModule { }
