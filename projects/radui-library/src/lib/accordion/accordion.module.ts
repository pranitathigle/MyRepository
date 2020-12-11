import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {AccordionComponent} from './accordion.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { RadioModule } from '../radio/radio.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    DropdownModule,CheckboxModule,RadioModule,ButtonModule
  ],
  exports:[AccordionComponent],
  entryComponents:[AccordionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionModule { }
