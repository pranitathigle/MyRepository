import {Input, EventEmitter, Output, OnInit} from '@angular/core';
import {FieldConfig, FormValidator} from '../../lib/model/field'; ;
import {Subscription} from 'rxjs';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import {EventAggregratorService} from '../event-aggregator/event-aggregator.service';
import {isNullOrUndefined} from 'util';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { EventAggregratorModule } from '../event-aggregator/event-aggregator.module';

export abstract class FormEngineBase{
    @Input() fields: any;
    @Output() submit: EventEmitter<any> = new EventEmitter<any>();
    @Output() getFields: EventEmitter<any> = new EventEmitter<any>();
    @Input() form: FormGroup;
    subscription: Subscription;
    formSubscription: Subscription;


    addressFields: FieldConfig[] = [{
        name: 'addressLine1',
        type: 'input',
        value: '',
        validations: [{
            name: 'required',
            action: 'required',
            message: 'Please enter an address'
        }]
    }, {
        name: 'city',
        type: 'input',
        value: '',
        validations: [{
            name: 'required',
            action: 'required',
            message: 'Please enter an city'
        }]
    }, {
        name: 'state',
        type: 'input',
        value: '',
        validations: [{
            name: 'required',
            action: 'required',
            message: 'Please Select state'
        }]
    }, {
        name: 'zipCode',
        type: 'input',
        value: '',
        validations: [{
            name: 'required',
            action: 'required',
            message: 'Please enter an zipcode'
        }]
    }];

    formsCtrlList: FieldConfig[];
    allFields: FieldConfig[] = [];
    protected constructor(
        protected fb: FormBuilder,
        protected eventAggregatorService: EventAggregratorService
    ){}

    subscribeEventAggregator(){
        if (this.fields && this.fields.name){
            if (this.subscription){
                this.subscription.unsubscribe();
                this.subscription = null;
            }
            if (this.formSubscription){
                this.formSubscription.unsubscribe();
                this.formSubscription = null;
            }
            this.subscription = this.eventAggregatorService.subscribe(this.fields.name + ':validateAllFields', (payload) => {
                if (payload && payload.event){
                    this.onSubmit(event);

                }else{
                    this.validateAllFormFields(this.form);
                }
            });
            this.formSubscription = this.eventAggregatorService.subscribe(this.fields.name + ':updateFormGroup', (payload) => {
               const fieldList: FieldConfig[] = [];
               this.getAllFields(this.fields, fieldList);
               this.formsCtrlList = fieldList;
               this.createControl(true);
               this.form.updateValueAndValidity();
            });
        }
    }

    onSubmit(event: Event){
        event.preventDefault();
        event.stopPropagation();
        if (this.form.valid){
            this.submit.emit(this.form.value);
        }else{
            this.validateAllFormFields(this.form);
        }
    }

    getAllFields(fieldConfig: FieldConfig, fieldList: FieldConfig[]){
        if (fieldConfig && fieldConfig.children && fieldConfig.children.length > 0){
            for (const field of fieldConfig.children){
                fieldList.push(field);
                if (field.children && field.children.length > 0){
                    this.getAllFields(field, fieldList);
                }
            }
        }
    }

    createControl(updateCtrl?: boolean){
        if (isNullOrUndefined(this.formsCtrlList)){
            const fieldList: FieldConfig[] = [];
            this.getAllFields(this.fields, fieldList);
            this.formsCtrlList = fieldList;
            this.getFields.emit({fields: this.formsCtrlList, formGroup: this.form});
        }
        if (updateCtrl){
            this.updateFormControl();
        }

        for (const field of this.formsCtrlList) {
            if (!this.isNotAllowedFormCtrlField(field.type)){
                if (field.showField){
                    if (field.type === 'address'){
                        this.createAddressControls(field);
                    }else if (isNullOrUndefined(this.form.controls[field.name])){
                        this.createFormControl(field);
                    }
                }else if (updateCtrl){
                    if (this.form && this.form.controls){
                        if (field.type === 'address'){
                            for (const addressField of this.addressFields){
                                if (addressField && this.form.controls[addressField.name]){
                                    this.form.removeControl(addressField.name);
                                }
                            }
                        }else if (this.form.controls[field.name]){
                            this.form.removeControl(field.name);
                        }
                    }
                }
            }
        }
    }

    isNotAllowedFormCtrlField(fieldType: string){
        if (fieldType === 'button' || fieldType === 'heading' || fieldType === 'conatiner'
        || fieldType === 'paragraph' || fieldType === 'list'){
            return true;
        }
        return false;
    }

    createAddressControls(field: FieldConfig){
        for (const addressField of this.addressFields) {
            if (field.value){
                addressField.value = field.value[addressField.name];
            }
            if (addressField && isNullOrUndefined(this.form.controls[addressField.name])){
                this.createFormControl(addressField);
            }
        }
        this.form.addControl('qualityCode', new FormControl(null, [Validators.max(0)]));
    }

    createFormControl(field: FieldConfig){
        if (this.form && field){
            const control = this.fb.control (
                {value: field.value , disabled: field.disabled},
                this.bindValidations(field.validations || [], field)
            );
            this.form.addControl(field.name, control);
        }
    }

    updateFormControl(){
        if (this.form && this.form.controls){
            let formCtrlKeys = Object.keys(this.form.controls);
            formCtrlKeys = formCtrlKeys.filter((key) => {
                return this.getIndex(this.formsCtrlList, 'name', key) === -1;
            });
            for (const fieldName of formCtrlKeys){
                if (fieldName !== 'addressLine1' && fieldName !== 'city' && fieldName !== 'state' &&
                fieldName !== 'zipCode' && fieldName !== 'qualityCode') {
                    this.form.removeControl(fieldName);
                }
            }
        }
    }

    getIndex(arry: any[], key: string, value: string){
        if (arry && key){
            return arry.findIndex((element) => {
                return element[key] === value;
            });
        }
        return -1;
    }

    bindValidations(validations: FormValidator[], field: FieldConfig){
        if (validations.length > 0){
            const validList =  [] as any;
            for (const validation of validations){
                if (validation && validation.name && field){
                    switch (validation.name){
                        case 'min':
                            validList.push(Validators.min(field.minValue));
                            break;
                        case 'max':
                            validList.push(Validators.max(field.maxValue));
                            break;
                        case 'minLength':
                            validList.push(Validators.minLength(field.minLength));
                            break;
                        case 'maxLength':
                            validList.push(Validators.maxLength(field.maxLength));
                            break;
                        case 'required':
                            validList.push(Validators.required);
                            break;
                    }
                }
            }
            return Validators.compose(validList);
        }
        return null;
    }

    validateAllFormFields(formGroup: FormGroup){
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control){
                control.markAsTouched({onlySelf: true});
            }
        });
        this.markControlsDirty(formGroup);
    }

    markControlsDirty(group: FormGroup | FormArray): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.controls[key];
            if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray){
                this.markControlsDirty(abstractControl);
            }else{
                abstractControl.markAsDirty();
                abstractControl.updateValueAndValidity({onlySelf: false, emitEvent: true});
            }
        });
    }

    syncForm(update: boolean){
        this.createControl(update);
        this.form.updateValueAndValidity();
        this.subscribeEventAggregator();
    }
}
