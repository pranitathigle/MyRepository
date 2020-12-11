import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [DropdownComponent],
  entryComponents:[DropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownModule { }
