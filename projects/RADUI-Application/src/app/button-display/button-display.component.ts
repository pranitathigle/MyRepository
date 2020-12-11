import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../../../radui-library/src/lib/model/field';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-display',
  templateUrl: './button-display.component.html',
  styleUrls: ['./button-display.component.scss']
})
export class ButtonDisplayComponent implements OnInit {
  style:any;
  constructor() { }
  selectedOption;

  ngOnInit(): void {
     this.style = JSON.stringify(this.buttonConfig.style);
  }

  buttonConfig: FieldConfig = {
    label: 'BUTTON',
    fieldtype: 'raised',
    color: 'blue' , // accent, primary, warn
    disabled: false,
    style: {'background-color': '#0070ad', 'color': 'white','font-weight': 'bold'},
    type: 'button', // stroked, flat,raised'
    eventName: '' // fm:generateForm
  };

  onStyleChange(){
    this.buttonConfig.style = {'background-color': 'red', 'color': 'blue'};
    this.buttonConfig.style = JSON.parse(this.style);
    
   // this.style = JSON.stringify(this.style);
  }

  selectHandler(){
    let b = document.querySelector("button"); 
    this.buttonConfig.disabled = this.selectedOption;
    if(b!=null) {
      if(this.selectedOption === 'true'){
        b.setAttribute("disabled", "disabled");
      }else{
        b.removeAttribute("disabled");
      }
    }
    
    
  }
  

  
}
