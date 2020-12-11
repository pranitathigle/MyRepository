import { Component, OnInit, Input } from '@angular/core';
import { DatePickerInterFace } from './datepicker-interface';
import { FormControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';

export const YYMMDD = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export const MMDDYY = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export const DDMMYYY = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export const MonthYear = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}


@Component({
  selector: 'radui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MonthYear},
  ]
})
export class DatepickerComponent {

  customDateText
  dateTest: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.customDateText="Add Your Date Text"
    this.dateTest = new FormControl(moment());

  }

  private _configText: DatePickerInterFace;

  get configText(): DatePickerInterFace {
    return this._configText;
  }

  @Input('configText')
  set configText(valueObject: DatePickerInterFace) {
    valueObject.backgroundColor = valueObject.backgroundColor || 'white';
    valueObject.fontsize = valueObject.fontsize || '12px';
    valueObject.color = valueObject.color || '#0070AD';
    valueObject.borderColor = valueObject.borderColor || 'blue';
    valueObject.textAlign = valueObject.textAlign || 'left';
    valueObject.borderStyle = valueObject.borderStyle || 'solid';
    valueObject.padding = valueObject.padding || '10px';
    valueObject.width = valueObject.width || '100%';
    this._configText = valueObject;
  }

  dateStyle() {
    return {
      backgroundColor: this.configText.backgroundColor,
      fontsize: this.configText.fontsize,
      color: this.configText.color,
      textAlign: this.configText.textAlign,
      borderColor: this.configText.borderColor,
      borderStyle: this.configText.borderStyle,
      padding: this.configText.padding,
      width: this.configText.width
    };
  }
  getTimeStamp() {
    this.dateTest = new FormControl((new Date().getDate() - 1).toString);
  }

}
