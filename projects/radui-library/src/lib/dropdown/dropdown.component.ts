import { Component, OnInit, Input, ViewEncapsulation, Output } from '@angular/core';
import { FormControl , FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import { FieldConfig } from '../model/field';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { FieldComponentBase } from '../form-engine/field-component-base';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'radui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DropdownComponent extends FieldComponentBase implements OnInit{

  // private _configDropdown: DropdownInterFace;
  select:string='Select';
  field:FieldConfig;
  @Output() selectedValue: any;
  group : FormGroup;
  panelheader = this.field
  selectOptionNameDynamic: any;
   

  // get configDropdown(): DropdownInterFace {
  //   return this._configDropdown;
  // }

  // @Input('configDropdown')
  // set configDropdown(valueObject: DropdownInterFace) {
  //   valueObject.dropdownValues = valueObject.dropdownValues || [
  //     'steak',
  //     'pizza',
  //     'tacos',
  //  ],
  //  valueObject.placeholder = valueObject.placeholder || 'Default';
  //   valueObject.autocompleteValues = valueObject.autocompleteValues || ['One', 'Two', 'Three'];
  //   this._configDropdown = valueObject;
  // }
  
  constructor(private eventAggregratorService: EventAggregratorService,public fb: FormBuilder) {
    super();
  }

  /* Code for Autocomplete */
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    console.log('coming in drop down');
    if(this.field.selectOptionName) {
      this.group = this.fb.group ({
        selectOptionNameDynamic : [this.field.selectOptionName.value]
      })
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      if(this.field.value) {
        this.selectedValue = this.field.value;
      }
  
      // if(this.field.eventName) {
      //   this.eventAggregratorService.broadcast(this.field.eventName, 
      //     {selectedOption: this.selectedValue, formsGroup: this.group, field: this.field})
      // }
  }

  selectHandler() {
    this.field.value = this.selectedValue;
    this.field.placeHolder = '';
    if(this.field.eventName) {
      this.eventAggregratorService.broadcast(this.field.eventName, 
        {selectedOption: this.selectedValue, formsGroup: this.group, field: this.field})
    }
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.field.autocompleteValues.filter(option => option.toLowerCase().includes(filterValue));
  }

}
