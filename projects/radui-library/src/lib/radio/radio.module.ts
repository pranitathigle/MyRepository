import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RadioComponent } from './radio.component';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, MatRadioModule, FormsModule, ReactiveFormsModule],
  exports: [RadioComponent],
  entryComponents:[RadioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class RadioModule {}
