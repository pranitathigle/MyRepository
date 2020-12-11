import { Component, OnInit, Input, Inject, ViewEncapsulation } from '@angular/core';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'radui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class RadioComponent extends FieldComponentBase implements OnInit {

  // selectedValue: string;
  // @Input() radioValues: string[] = ['Paypal', 'Mastercard', 'Visa'];
  // @Input() orientation: string;
  // @Input() color: string = 'blue';

  field:FieldConfig;
  selectedOption: any;
  @Input() group : FormGroup;
  
  constructor(private eventAggregratorService: EventAggregratorService) {
    super();
  }

  ngOnInit(): void {
    // this.setCss('mat-radio-inner-circle', `background-color:${this.color} !important;`);
    // this.setCss('mat-radio-outer-circle', `border-color: ${this.color} !important;`);
    console.log('coming in radio ui ',this.field);
    if(this.field.value) {
      this.selectedOption = this.field.value;
    }
  }

  // setCss(classString: string, classStyles: any) {
  //   setTimeout(() => {
  //     let divs = this.document.getElementsByClassName(classString);
  //     Array.from(divs).forEach(div => {
  //       div.setAttribute("style", classStyles);
  //     });
  //   }, 0);
  // }

  selectHandler() {
    this.field.style={'color':'red'};
    this.field.value = this.selectedOption;
    if(this.field.eventName) {
      this.eventAggregratorService.broadcast(this.field.eventName, 
        {selectedOption: this.selectedOption, formsGroup: this.group, field: this.field})
    }
  }
}
