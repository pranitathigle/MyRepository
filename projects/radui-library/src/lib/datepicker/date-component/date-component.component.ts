import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePickerInterFace } from '../datepicker-interface';
import * as moment from 'moment';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MonthYear } from '../date-buttons/date-buttons.component';

@Component({
  selector: 'radui-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.scss']
})
export class DateComponent implements OnInit {

  @Input() dateStyleNew
  @Input() customCalenderHeader
  dateTest: FormControl;
  constructor() { }

  ngOnInit(): void {
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
