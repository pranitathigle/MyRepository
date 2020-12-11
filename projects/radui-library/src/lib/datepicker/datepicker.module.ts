import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateComponent } from './date-component/date-component.component';
import { DateButtonsComponent } from './date-buttons/date-buttons.component';
import { MomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [DatepickerComponent, DateComponent, DateButtonsComponent],
  imports: [
    CommonModule, MatDatepickerModule,MatFormFieldModule, MatIconModule, MatNativeDateModule,
    MatInputModule, MatIconModule, FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, MomentDateModule
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [DatepickerComponent]
})
export class DatepickerModule { }
