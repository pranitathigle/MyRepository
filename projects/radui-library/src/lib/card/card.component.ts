import { Component, OnInit, Input } from '@angular/core';
import { CardInterFace } from './card.interface';
import { FieldComponentBase } from '../form-engine/field-component-base';

@Component({
  selector: 'radui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends FieldComponentBase implements OnInit {

valueObject: CardInterFace;
constructor() { super(); }

ngOnInit() : void {
 // this.valueObject.description = this.valueObject.description || '';
  // this.valueObject.width = this.valueObject.width || '200px';
  // this.valueObject.height = this.valueObject.height || '100px';
  // this.valueObject.backgroundColor = this.valueObject.backgroundColor || 'white';
  // this.valueObject.borderColor = this.valueObject.borderColor || 'grey';
  // this.valueObject.fontSize = this.valueObject.fontSize || '16px';

  };

dartStyle() {
    //return this.valueObject;
  }
}
