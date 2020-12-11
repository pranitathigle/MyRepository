import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'lib-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit, OnChanges {

  public fieldErrors: Array<string> = [];
  @Input() validations: any[];
  @Input() field: string;
  @Input() message: any;
  @Input() formErrors:Object;
  @Input() fieldName: string;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    
  }

}
