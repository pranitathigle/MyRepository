import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextareaComponent  extends FieldComponentBase implements OnInit {

  field: FieldConfig;
  selectedValue: any;
  @Input() group: FormGroup;
  _hasError = false;
  errorMessage: string;

  constructor(private eventAggregratorService: EventAggregratorService) {
    super();
  }

  ngOnInit(): void {
    if (this.field.value) {
      this.selectedValue = this.field.value;
    }
  }

  contentChangeHandler(event){
    if(event && event.currentTarget){
      this.field.value = event.currentTarget.value;
    }
    console.log('this.field.value ',this.field.value);
    if(this.field.eventName){
      this.eventAggregratorService.broadcast(this.field.eventName,
        {
          selectedOption: this.field.value,
          formsGroup: this.group,
          field: this.field
        });
    }
    
  }

}
