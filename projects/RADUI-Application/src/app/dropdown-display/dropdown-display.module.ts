import { CommonModule } from '@angular/common';
import { ButtonModule } from '../../../../radui-library/src/lib/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DropdownModule } from '../../../../radui-library/src/lib/dropdown/dropdown.module';
import { MatSelectModule } from '@angular/material/select';
import { DropdownDisplayComponent } from './dropdown-display.component';


@NgModule({
    declarations: [DropdownDisplayComponent],
    imports: [
      CommonModule,
      ButtonModule,
      FormsModule,
      ReactiveFormsModule,
      DropdownModule,
      MatSelectModule
      
    ]
    
  })
  export class DropDownDisplayModule { }