import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../../../../radui-library/src/lib/model/field';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventAggregratorService } from '../../../../radui-library/src/lib/event-aggregator/event-aggregator.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  title = 'RADUI-Application';
  fieldMap  = new Map<String, FieldConfig[]>();
  selectedValue;
  myVar1 = false;
  myVar2 = false;
  myVar3 = false;
  count;
  accordionMap = new Map<String, []>();
  formGroup:FormGroup;

  numberOfPanel = {
    options: [
    { value: '1', label: 'One'},
    { value: '2', label: 'Two'},
    { value: '3', label: 'Three'},
    { value: '4', label: 'Four'},
    { value: '5', label: 'Five'}
  ], };

  inputConfig: FieldConfig = {
    type: 'input',
    fieldtype: 'input',
    label: 'Input box',
    showField: true,
    disabled: true,
    isPhone:true,
    isPassword: true,
    isEmail: false,
    reqdClearing: true,
    isPlainText: true,
    validations: []
  };

  checkboxConfig: FieldConfig = {
    type: 'select',
    fieldtype: 'checkbox',
    subType: 'tile',
    label: '',
    name: 'fieldSelector',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    disabled: true,
    options: [
      { value: '', label: 'I authorize the Auto Club Group (ACG), Auto Club Insurance Association (ACIA) and their subsidiaries to initiate <br> withdrawals from my account or to change my credit card listed' }
    ],
    validations: []
  };
  buttonConfig: FieldConfig = {
    label: 'BUTTON',
    fieldtype: 'stroked',
    color: 'blue' , // accent, primary, warn
    disabled: false,
    style: {'background-color': 'pink', 'color': 'blue', 'width': '50px', 'height': '50px', 'border-color': 'black', 'border-style': 'solid', 'border-radius': '50%'},
    type: 'button', // stroked, flat,raised'
    eventName: '' // fm:generateForm
  };

  numberOfPanelConfig: FieldConfig = {
    type: 'select',
    fieldtype: 'dropdown',
    label: 'Please select Number of Panels',
    name: 'fieldSelector',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    placeHolder: 'Add New Method1',
    showField: true,
    options: [
      { value: '1', label: 'One' }, { value: '2', label: 'Two' }, { value: '3', label: 'Three' },
      { value: '4', label: 'Four' }, { value: '5', label: 'Five' }, { value: '6', label: 'Six' },
      { value: '7', label: 'Seven' }, { value: '8', label: 'Eight' }, { value: '9', label: 'Nine' },
      { value: '10', label: 'Ten' }
    ]
  };

  dropDownConfig: FieldConfig = {
    type: 'select',
    fieldtype: 'dropdown',
    label: 'Payment Method',
    name: 'fieldSelector',
    'selectOptionName':new FormControl('fieldSelector'),
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
  dropDownConfig1: FieldConfig = {
    type: 'select',
    fieldtype: 'dropdown',
    label: 'Payment Method',
    name: 'fieldSelector',
    selectOptionName:new FormControl('fieldSelector'),
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    isMaterialComponent:true,
    placeHolder: 'Add New Method1',
    showField: true,
    options: [
      { value: '', label: 'Add New Method' },
      { value: 'Payment111', label: 'Payment111' },
      { value: 'Payment222', label: 'Payment2' },
      { value: 'Payment3', label: 'Payment3' }
    ],
    autocompleteValues : ['One', 'Two' , 'Three'],
    validations: []
  };

  currentPlanRadioConfig: FieldConfig = {
    type: 'radio',
    fieldtype: 'radio',
    subType: 'vertical',
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
    fieldtype: 'radio',
    subType: 'horizontal',
    label: 'Available Plans',
    name: 'hRadio1',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    disabled: false,
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

  accordionConfig: FieldConfig = {
    type: 'accordion',
    subType: 'horizontal',
    label: 'Available Plans',
    name: 'hRadio1',
    eventName: 'select:onSelectField',
    className: 'col-sm-8',
    labelClass: 'col-md-12',
    showField: true,
    dynamicHeader: {'background-color': '#FDFBE0', color: 'Black'},
    options: [
      {
        id: 'panel1',
        title: 'Panel One',
        description: 'Description One',
        isDisabled: false,
        isExpanded: false,
      }, {
        id: 'panel2',
        title: 'Panel Two (Disabled)',
        description: 'Description Two',
        isDisabled: false,
        isExpanded: false,
      }, {
        id: 'panel3',
        title: 'Panel Three',
        description: 'Description Three',
        isDisabled: false,
        isExpanded: true,
      },
      {
        id: 'panel4',
        title: 'Panel Four',
        description: 'Description Three',
        isDisabled: false,
        isExpanded: true,
      },
      {
        id: 'panel5',
        title: 'Panel Five',
        description: 'Description Three',
        isDisabled: false,
        isExpanded: true,
      }
    ]
  };

  componentList: any = [
    {
      id: '1', label: 'Checkbox', isChecked: false, type: 'checkbox'
    },
    {
      id: '2', label: 'Button', isChecked: false, type: 'button'
    },
    {
      id: '3', label: 'Radio', isChecked: false, type: 'radio'
    },
  ];

  formConfig: FieldConfig;
   selectForm: FormGroup;
  buttonSubs: Subscription;
  selectSubs: Subscription;
  jsonFileName: string;

  constructor(private fb:FormBuilder,private eventAggregratorService: EventAggregratorService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      formJsonText:['',Validators.required]
    });
    this.selectSubs = this.eventAggregratorService.subscribe('select:onSelectField', (payload) => {
      if (payload) {
        this.jsonFileName = payload.selectedOption;
      }
    });
    this.fieldMap.set('panel0', [this.dropDownConfig, this.checkboxConfig, this.buttonConfig]);
    this.fieldMap.set('panel1', [this.dropDownConfig]);
    this.fieldMap.set('panel2', [this.currentPlanRadioConfig]);
    this.fieldMap.set('panel3', [this.availablePlanRadioConfig]);
    this.fieldMap.set('panel4', [this.dropDownConfig1]);
    this.fieldMap.set('panel5', [this.dropDownConfig1,this.checkboxConfig]);

  }

  selectHandler(){
    this.count = parseInt(this.selectedValue);
    console.log('this.count ', this.count);
    for (let i = 0; i < this.count; i++){
      this.accordionMap.set('accordion' + i, this.componentList);

    }


  }

  arrayOne(n: number): any[] {
    console.log('aaaa ', Array(n));
    return Array(n);
  }

  getComponentOption(){
       console.log();
  }

}
