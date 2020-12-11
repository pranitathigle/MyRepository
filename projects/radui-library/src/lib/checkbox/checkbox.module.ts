import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";

import {CheckboxComponent} from './checkbox.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports:[CheckboxComponent],
  entryComponents:[CheckboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxModule { }
