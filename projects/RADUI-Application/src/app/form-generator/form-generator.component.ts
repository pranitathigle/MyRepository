import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { ButtonComponent } from 'projects/radui-library/src/lib/button/button.component';
import { CheckboxComponent } from 'projects/radui-library/src/lib/checkbox/checkbox.component';
import { TextareaComponent } from 'projects/radui-library/src/lib/textarea/textarea.component';
import { RadioComponent } from 'projects/radui-library/src/lib/radio/radio.component';
import { FieldConfig } from 'projects/radui-library/src/lib/model/field';
import { Subscription } from 'rxjs';
import * as Clipboard from 'clipboard';
import { EventAggregratorService } from 'projects/radui-library/src/lib/event-aggregator/event-aggregator.service';
import { DropdownComponent } from 'projects/radui-library/src/lib/dropdown/dropdown.component';
import { TextFieldComponent } from 'projects/radui-library/src/lib/text-field/text-field.component';


@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit,AfterViewInit {

  mapper = {
    button: ButtonComponent,
    checkbox:CheckboxComponent,
    textarea:TextareaComponent,
    radio: RadioComponent,
    select: DropdownComponent,
    input: TextFieldComponent
  };

  inputConfig:FieldConfig = {
    "type":"input",
    "subType":"number",
    "checkboxLabel":"I dont\"t know the year.",
    'inputOptionName':new FormControl(''),
    "className":"",
    "labelClass":"col-md-12",
    "inputClass":"col-md-5",
    "label":"",
    "extraLabel":"Extra Label",
    "extraText": "Extra Text",
    "helpText":"Hello",
    "minLength":3,
    "maxLength":4,
    "minValue":100,
    "maxValue":2000,
    "value":"",
    "disabled":false,
    "showField":true,
    "placeHolder":"Enter Text",
    "validations":[
        {
            "name":"required",
            "message":"Please make a selection."
        },
        {
            "name":"min",
            "message":"Min Validation"
        },
        {
            "name":"max",
            "message":"Max Validation"
        }
    ]

  };

  textAreaFieldConfig: FieldConfig = {
    'type': 'textarea',
    'name':'formJsonText',
    'labelClass':'col-md-12',
    'inputClass':'col-md-12',
    'label':'Placed Form engine JSON in the below text area and click Generate Form Button.',
    'showField':true,
    'maxLength':3000000,
    'style': {'height':'200px','width':'600px'},
    'validations':[
      {
        'name':'required',
        'message':'Please enter Form Engine1111 JSON.'
      }
    ]
  };

  buttonConfig: FieldConfig = {
    'fieldtype': 'flat',
    'type': 'button',
    'name':'submit',
    'labelClass':'col-sm-4 col-xs-12',
    'btnClass':'btn-primary  ',
    'label':'Generate Form',
    'showField':true,
    'style': {'background-color': '#0070ad', 'color': 'white', 'width': '130px', 'height': '40px', 'border-color': 'black', 'border-style': 'solid'},
    'eventName':'fm:generateForm'
  };

  selectConfig: FieldConfig = {
    'type' : 'select',
    'label': 'Select Field show JSON',
    'selectOptionName':new FormControl('fieldSelector'),
    'eventName' : 'select:onSelectField',
    'className': 'col-sm-8',
    'labelClass':'col-md-12',
    'showField':true,
    'options':[
      {'value':'','label':'Select one'},
      {'value':'input-fields','label':'Input Field'},
      {'value':'radio','label':'Radio Field'},
      {'value':'checkbox','label':'Checkbox Field'}],
    'validations' : []
  };

  radioConfig: FieldConfig = {
    'type' : 'radio',
    'label': 'Radio option show JSON',
    'radioOptionName':new FormControl('fieldSelector'),
    'eventName' : 'select:onRadioField',
    'className': 'col-sm-8',
    'labelClass':'col-md-12',
    'showField':true,
    'options':[
      {'value':'Yes','label':'YES'},
      {'value':'No','label':'NO'}
      ],
    'validations' : []
  };

  formConfig: FieldConfig;
  formGroup:FormGroup;
  selectForm: FormGroup;
  buttonSubs: Subscription;
  selectSubs: Subscription;
  pres:any;
  jsonFileName: string;


  constructor(private fb:FormBuilder, private eventAggregatorService:EventAggregratorService) { }

  ngOnInit() {
    console.log('coming herw1');
    this.formGroup = this.fb.group({
      formJsonText:['',Validators.required]
    });
    this.selectForm = this.fb.group({
      fieldSelector: ['']
    });
    this.buttonSubs = this.eventAggregatorService.subscribe('fm:generateForm',(payload) => {
      console.log('coming herw2 ',this.textAreaFieldConfig.value);
      if(this.textAreaFieldConfig.value) {
        console.log('json coming');
        this.formConfig = JSON.parse(this.textAreaFieldConfig.value);
      }
    });
    this.selectSubs = this.eventAggregatorService.subscribe('select:onSelectField',(payload) => {
      if(payload) {
        this.jsonFileName = payload.selectedOption;
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.copyToClipboard();
    },2000);
  }

  copyToClipboard(){
    const pres = document.getElementsByTagName('pre');

    if(pres != null){
      for (let i=0 ; i< pres.length; i++){
        if(this.isPrismClass(pres[i])) {
          pres[i].innerHTML = `<div class = "copy btn btn-default">
          <em class="icon icon-clipboard"></em>
          copy</div><code class=${pres[i].className}">${pres[i].innerHTML}</code>`;
        }
      }
    }
    const clipboard = new Clipboard('.copy',{
      target: (trigger) => {
        return trigger.nextElementSibling;
      }
    });
    clipboard.on('success',(event)=>{
      event.trigger.textContent = 'copied!';
      setTimeout(() => {
        event.clearSelection();
        event.trigger.textContent = 'copy';
      },2000)
    });
  }

  isPrismClass(preTag){
    return preTag.className.trim().substring(0,8) === 'language';
  }

}
