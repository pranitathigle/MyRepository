import { Component, OnInit , ViewChild, Output, ComponentFactoryResolver} from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { FieldConfig } from '../model/field';



@Component({
  selector: 'radui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent extends FieldComponentBase implements OnInit {
  
  panelConfig: FieldConfig[] = [];
  dropDownMap = new Map<String,FieldConfig>();
  checkboxMap = new Map<String,FieldConfig>();
  radioMap = new Map<String,FieldConfig>();
  buttonMap = new Map<String,FieldConfig>();
  @Output() field: FieldConfig;
  panelOpenState = false;
  accordionList:any;
  @Output() fieldMap = new Map<String,FieldConfig[]>();
  @ViewChild('accordion',{static:true}) Accordion: MatAccordion
  panelheader :{};
  
  constructor() { 
    
    super();
  }

  ngOnInit(): void {
    for(let i=0; i<this.fieldMap.size; i++) {
      if(this.fieldMap.get('panel'+i)) {
        this.panelConfig = this.fieldMap.get('panel'+i);
        for(let j=0 ;j<this.panelConfig.length; j++){
          if(this.panelConfig[j]){
            let componentType = this.panelConfig[j].fieldtype;
            console.log('componentType ',componentType);
            if(componentType === 'dropdown'){
              let key = 'dropdown_panel'+i;
              this.dropDownMap.set(key,this.panelConfig[j]);
            }
            if(componentType === 'radio'){
              let key = 'radio_panel'+i;
              this.radioMap.set(key,this.panelConfig[j]);
            }
            if(componentType === 'checkbox'){
              let key = 'checkbox_panel'+i;
              this.checkboxMap.set(key,this.panelConfig[j]);
            }
            if(componentType === 'button'){
              let key = 'button_panel'+i;
              this.buttonMap.set(key,this.panelConfig[j]);
            }
          }
        }
      }
    }
   this.panelheader = this.field.dynamicHeader;
}
asIsOrder(a, b) {
  return 1;
}
 
  beforePanelClosed(panel){
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel){
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }

  afterPanelClosed(){
    console.log("Panel closed!");
  }
  afterPanelOpened(){
      console.log("Panel opened!");
  }


  closeAllPanels(){
    this.Accordion.closeAll();
  }

}
