import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TextFieldInterFace } from './text-field-interface';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'radui-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent extends FieldComponentBase implements OnInit {
  field: FieldConfig;
  selectedValue: any;
  @Input() group: FormGroup;
  _hasError = false;
  errorMessage: string;
  hide = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.field.isPassword) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
