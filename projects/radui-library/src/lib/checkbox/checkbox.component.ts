import { Component, OnInit, Input } from '@angular/core';
import { FieldComponentBase } from '../form-engine/field-component-base';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'radui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends FieldComponentBase implements OnInit {
  @Input() label: string = 'Default Checkbox Label';
  @Input() color: string = 'Blue';
  selectedOption: string;
  checkboxStatus: string;
  @Input() group: FormGroup;

  constructor(private eventAggregratorService: EventAggregratorService) { 
       super();
  }
 
  ngOnInit(): void {
  }

  selectHandler(option:any){
    if(option && this.field){
        if(option.checked){
            this.selectedOption=option.value;
            this.checkboxStatus = 'Checked';
        }else{
            this.selectedOption='';
            this.checkboxStatus = 'UnChecked';
        }
        this.eventAggregratorService.broadcast(this.field.eventName,
            {selectedOption:this.selectedOption, formGroup:this.group, field:this.field});
    }
}

}
