import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaduiFormGeneratorComponent } from './radui-form-generator.component';


@NgModule({
  declarations: [RaduiFormGeneratorComponent],
  imports: [
    CommonModule
  ],
  exports: [ RaduiFormGeneratorComponent ]
})
export class RaduiFormGeneratorModule { }
