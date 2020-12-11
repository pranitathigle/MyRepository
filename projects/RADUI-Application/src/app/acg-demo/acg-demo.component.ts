import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../../../radui-library/src/lib/model/field';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventAggregratorService } from '../../../../radui-library/src/lib/event-aggregator/event-aggregator.service';


@Component({
  selector: 'app-acg-demo',
  templateUrl: './acg-demo.component.html',
  styleUrls: ['./acg-demo.component.scss']
})
export class AcgDemoComponent implements OnInit {


  selectConfig: FieldConfig = {
    type: 'select',
    subType: 'tile',
    label: '',
    name: 'fieldSelector',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    options: [
      { value: '', label: 'I authorize the Auto Club Group (ACG), Auto Club Insurance Association (ACIA) and their subsidiaries to initiate <br> withdrawals from my account or to change my credit card listed' }
    ],
    validations: []
  };

  dropDownConfig: FieldConfig = {
    type: 'select',
    label: 'Payment Method',
    name: 'fieldSelector',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    placeHolder: 'Add New Method1',
    showField: true,
    options: [
      { value: '', label: 'Add New Method' },
      { value: 'Payment1', label: 'Payment1' },
      { value: 'Payment2', label: 'Payment2' },
      { value: 'Payment3', label: 'Payment3' }
    ],
    autocompleteValues : ['One', 'Two' , 'Three'],
    validations: []
  };

  currentPlanRadioConfig: FieldConfig = {
    type: 'radio',
    subType: 'horizontal',
    label: 'Current Plan',
    name: 'hRadio',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    options: [
      { value: 'Option1', label: 'Installment plan with automatic deduction' }
    ],
    validations: []
  };

  availablePlanRadioConfig: FieldConfig = {
    type: 'radio',
    subType: 'horizontal',
    label: 'Available Plans',
    name: 'hRadio1',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    options: [
      { value: 'Option2', label: 'Pay-in-full with automatic deduction' },
      { value: 'Option3', label: 'Pay in full with direct bill' },
      { value: 'Option4', label: 'Direct bill installments' }

    ],
    validations: [{
      name: 'required',
      message: 'Please make a selection'
    }]
  };

  formConfig: FieldConfig;
  formGroup: FormGroup;
  selectForm: FormGroup;
  buttonSubs: Subscription;
  selectSubs: Subscription;
  jsonFileName: string;

  constructor(private eventAggregratorService: EventAggregratorService) { }

  ngOnInit() {
    this.selectSubs = this.eventAggregratorService.subscribe('select:onSelectField', (payload) => {
      if (payload) {
        this.jsonFileName = payload.selectedOption;
      }
    });
  }

}
