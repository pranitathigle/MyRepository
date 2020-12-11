import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TextFieldComponent } from './text-field.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ TextFieldComponent ],
  imports: [
    CommonModule,
    MatInputModule, MatIconModule, FormsModule,
    ReactiveFormsModule
  ],
  exports: [ TextFieldComponent ]
})
export class TextFieldModule {}
