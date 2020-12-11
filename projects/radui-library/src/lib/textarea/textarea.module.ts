import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent} from './textarea.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormHelperModule } from '../form-helper/form-helper.module';


@NgModule({
  declarations: [ TextareaComponent ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormHelperModule
    
  ],
  exports: [TextareaComponent]
})
export class TextareaModule { }
