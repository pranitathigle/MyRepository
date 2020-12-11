
import { Component, OnInit } from '@angular/core';
import {RADUILibraryComponent} from '../../../../radui-library/src/lib/radui-library.component';
import { TableComponent } from '../../../../radui-library/src/lib/table/table.component';
import { CardComponent } from '../../../../radui-library/src/lib/card/card.component';
import { CheckboxComponent } from '../../../../radui-library/src/lib/checkbox/checkbox.component';
import { RadioComponent } from '../../../../radui-library/src/lib/radio/radio.component';
import { CarouselComponent } from '../../../../radui-library/src/lib/carousel/carousel.component';
import { FieldConfig } from '../../../../radui-library/src/lib/model/field';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventAggregratorService } from '../../../../radui-library/src/lib/event-aggregator/event-aggregator.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTableShown: boolean;
  isCardShown: boolean;
  isCheckboxShown: boolean;
  isRadioShown: boolean;
  isDropdownShown: boolean;

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
      { value: '', label: 'checkbox1' },
      { value: '', label: 'checkbox2' },
      { value: '', label: 'checkbox3' },
    ],
    validations: [],
    description: 'Text description',
    disabled: true
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
      { value: 'Option1', label: 'Installment plan with automatic deduction' },
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
    AOS.init({
      duration: 1000
    });
  }

  toggleTableShow() {
    this.isTableShown = !this.isTableShown;
    this.isTableShown === true
      ? (document.getElementById('toggle').className = 'fas fa-plus-circle')
      : (document.getElementById('toggle').className = 'fas fa-minus-circle');
  }
  toggleCardShow() {
    this.isCardShown = !this.isCardShown;
    this.isCardShown === true
      ? (document.getElementById('toggle').className = 'fas fa-plus-circle')
      : (document.getElementById('toggle').className = 'fas fa-minus-circle');
  }

  toggleCheckboxShow() {
    this.isCheckboxShown = !this.isCheckboxShown;
    this.isCheckboxShown === true
      ? (document.getElementById('toggle').className = 'fas fa-plus-circle')
      : (document.getElementById('toggle').className = 'fas fa-minus-circle');
  }

  toggleRadioShow() {
    this.isRadioShown = !this.isRadioShown;
    this.isRadioShown === true
      ? (document.getElementById('toggle').className = 'fas fa-plus-circle')
      : (document.getElementById('toggle').className = 'fas fa-minus-circle');
  }

  toggleDropdownShow() {
    this.isDropdownShown = !this.isDropdownShown;
    this.isDropdownShown === true
      ? (document.getElementById('toggle').className = 'fas fa-plus-circle')
      : (document.getElementById('toggle').className = 'fas fa-minus-circle');
  }




}
