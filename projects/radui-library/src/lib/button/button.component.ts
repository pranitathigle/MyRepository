import { Component, OnInit, Input } from '@angular/core';
import { DartButtonInterface } from './button.interface';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';


@Component({
  selector: 'radui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends FieldComponentBase implements OnInit {
  
  field:FieldConfig;
  selectedOption: any;
   group : FormGroup;

  constructor(private eventAggregatorService: EventAggregratorService) { 
    super();
  }

  ngOnInit(): void {
    
  }

  onClickBtn(){
     if(this.field && this.field.eventName) {
      console.log('coming in button component ',this.field);
      console.log('this.field.eventName ', this.field.eventName);
      console.log('this.field.group ', this.group);
      this.eventAggregatorService.broadcast(this.field.eventName,
        {formsGroup:this.group, field:this.field});
    }else {
      alert('Button clicked');
    }
  }

}
