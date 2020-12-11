import { Component, OnInit, DoCheck, OnChanges, Input, KeyValueDiffer, KeyValueDiffers, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
import { isNullOrUndefined } from 'util';
import { FieldConfig } from '../model/field';
import { FormEngineBase } from './form-engine-base';

@Component({
  selector: 'lib-form-engine',
  templateUrl: './form-engine.component.html',
  styleUrls: ['./form-engine.component.css']
})
export class FormEngineComponent extends FormEngineBase implements OnInit, DoCheck, OnChanges {

  @Input() fields: FieldConfig;
  @Input() mapper: any;
  differ: any;
  formSubscription: Subscription;
  constructor(
    public fb: FormBuilder,
    public eventAggregatorService: EventAggregratorService,
    private differs: KeyValueDiffers
  ) {
    super(fb, eventAggregatorService);
    this.differ = differs.find({}).create();
  }

  ngOnInit() {
    if (isNullOrUndefined(this.form)){
      this.form = this.fb.group({});
    }
    this.syncForm(false);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fields && this.form){
      this.syncForm(true);
    }

  }

  ngDoCheck(){
    const formValueChanges = this.differ.diff(this.form.value);
    if (formValueChanges){
      this.syncForm(true);
    }
  }

}
