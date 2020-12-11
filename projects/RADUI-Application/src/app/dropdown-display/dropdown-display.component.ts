import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldConfig } from '../../../../radui-library/src/lib/model/field';

@Component({
  selector: 'app-dropdown-display',
  templateUrl: './dropdown-display.component.html',
  styleUrls: ['./dropdown-display.component.scss']
})
export class DropdownDisplayComponent implements OnInit {

  style:any;
  selectedMaterialComp;
  selectedOption;
  constructor() { }
  
  ngOnInit(): void {
  }

  dropDownConfig: FieldConfig = {
    type: 'select',
    fieldtype: 'dropdown',
    label: 'Payment Method',
    name: 'fieldSelector',
    'selectOptionName':new FormControl('fieldSelector'),
    eventName: 'select:onSelectField',
    placeHolder: 'Add New Method',
    showField: true,
    isMaterialComponent:false,
    options: [
      { value: '', label: 'Add New Method' },
      { value: 'Payment1', label: 'Payment1' },
      { value: 'Payment2', label: 'Payment2' },
      { value: 'Payment3', label: 'Payment3' }
    ]
  };

  onStyleChange(){
    this.dropDownConfig.style = {'background-color': 'red', 'color': 'blue'};
    this.dropDownConfig.style = JSON.parse(this.style);
    
   // this.style = JSON.stringify(this.style);
  }

  selectHandler(){
    let nativeSelect = document.querySelector("select");
    let matSelect = document.querySelector("mat-select");
    console.log('matSelect ',matSelect);
    this.dropDownConfig.disabled = this.selectedOption;
    if(nativeSelect!=null) {
      if(this.selectedOption === 'true'){
        nativeSelect.setAttribute("disabled", "disabled");
      }else{
        nativeSelect.removeAttribute("disabled");
      }
    }
  }
  selectMaterialHandler(){
    if(this.selectedMaterialComp === 'true'){
      this.dropDownConfig.isMaterialComponent = true;
    }else{
      this.dropDownConfig.isMaterialComponent = false;
    }
  }

}
