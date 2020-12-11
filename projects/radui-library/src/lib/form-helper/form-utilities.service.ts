import {Injectable} from '@angular/core';
import {FormGroup, FormControl,FormArray,Validators,FormBuilder} from '@angular/forms';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators'
import {of} from 'rxjs/internal/observable/of'
import {FormValidator, FieldConfig} from '../model/field';


@Injectable({
    providedIn: 'root'
})

export class FormUtilitiesService {
    emailRegex = new RegExp (/@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,20})$/i);
    constructor(private fb: FormBuilder){

    }

    markControlsDirty(group:FormGroup | FormArray):void {
        Object.keys(group.controls).forEach((key:string)=>{
            const abstractControl = group.controls[key];
            if(abstractControl instanceof FormGroup || abstractControl instanceof FormArray){
                this.markControlsDirty(abstractControl);
            } else {
                abstractControl.markAsDirty();
                abstractControl.updateValueAndValidity({onlySelf : false,emitEvent:true});
            }
        });
    }

    validateForm(form:FormGroup, validationMessages: any,force?: boolean){
        if(force) {
            this.markControlsDirty(form);
        }

        const fields = form.controls;
        const controlErrors = {};
        for(const field in fields) {
            if(fields[field]) {
                if(((fields[field].dirty || force ) && !fields[field].valid) || fields[field].touched) {
                    controlErrors[field] = [];
                    for (const error in fields[field].errors) {
                        if(fields[field].errors[error] && validationMessages[field] && validationMessages[field].hasOwnProperty(error)){
                            controlErrors[field].push(validationMessages[field][error]);
                        }
                    }
                } else {
                    controlErrors[field] = [];
                }
            }
        }
        return controlErrors;
    }

    flattenForm(group:FormGroup | FormArray): FormControl[] {
      const flattend = [];
      Object.keys(group.controls).forEach((key:string)=>{
          const abstractControl = group.controls[key];
          if(abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
              flattend.push(...this.flattenForm(abstractControl));
          } else {
              flattend.push(abstractControl);
          }
      })
      return flattend;
    }

    validateFormAsynchronously(formGroup: FormGroup){
        const controls = this.flattenForm(formGroup);
        const syncValidationErrors = Object.keys(controls).map(c=>{
            const control = controls[c];
            return !control.validator ? null : control.validator(control);
        }).filter(errors => !!errors);
        return combineLatest(Object.keys(controls).map(c=>{
            const control = controls[c];
            return !control.asyncValidator ? of(null) : control.asyncValidator(control);
        })).pipe(
            map(asyncValidationErrors => {
                const hasErrors = [...syncValidationErrors,...asyncValidationErrors.filter(errors => !!errors)].length;
                if(hasErrors){
                    Object.keys(controls).forEach(key => {
                        controls[key].markAsTouched();
                        controls[key].updateValueAndValidity();
                    });
                }
                return !hasErrors;
            })).toPromise();
    }

    validateEmail(){
        return (c: FormControl) => {
            const isValid = this.emailRegex.test(c.value);
            if(isValid) {
                return null;
            }else {
                return {required : true}
            }
        };
    }

    focusInvalid(){
        function isVisible(elem){
            if(elem.type === 'checkbox' || elem.type === 'radio') {
                elem.classList.add('focus-hidden');
            }
            return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
        }

        const items = 'input.ng-invaid, select.ng-invalid, textarea.ng-invalid, .has-error input[type="checkbox"], .btn-group.ng-invalid,' +
        '.has-error input[type="radio"], .has-error select, .message-warning, .message-danger';

        const elements: NodeListOf<Element> = Array.prototype.slice.call(document.querySelectorAll(items)).filter(isVisible);
        if(elements.length){
            const headerOffset = 25;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = elements[0].getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - headerOffset;

            const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
            if(isSmoothScrollSupported) {
                window.scrollTo( {
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }else {
                window.scrollTo(0, offsetPosition);
            }

        }
        const hidden =document.querySelectorAll('.focus-hidden');
        [].forEach.call(hidden, function(el) {
            el.classList.remove('focus-hidden');
        });
    }

    toggleButton(selector:string, loadingMessage?: string) {
        const loadingText = loadingMessage || '<i class = \'icon icon-spinner icon-pulse icon-btn\' aria-label="Loading"></i> Saving';
        const button = document.querySelector(selector) as HTMLButtonElement;
        const isDisabled = button.classList.contains('disabled');
        if(isDisabled) {
            button.classList.remove('disabled');
            button.innerHTML = button.getAttribute('data-text-original');
            button.disabled = false;
        } else {
            button.classList.add('disabled');
            button.setAttribute('data-text-original',button.innerHTML);
            button.innerHTML = loadingText;
            button.disabled = true;
        }
    }

    bindValidations(validations: FormValidator[],field:FieldConfig) {
        if(validations.length > 0){
            const validList = <any>[];
            for(const validation of validations) {
                if(validation && validation.name && field) {
                    switch(validation.name){
                        case 'min':
                            validList.push(Validators.min(validation.min));
                        break;
                        case 'max':
                            validList.push(Validators.max(validation.max));
                        break;
                        case 'minLength':
                            validList.push(Validators.minLength(validation.minLength));
                        break;
                        case 'maxLength':
                            validList.push(Validators.maxLength(validation.maxLength));
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

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if(control) {
                control.markAsTouched({onlySelf:true});
            }
        });
        this.markControlsDirty(formGroup);
    }

    createFormControl(option:any){
        if(option && option.formGroup && option.fieldName){
            const control = this.fb.control(
                option.fieldValue,
                this.bindValidations(option.validations || [], option.field)
            );
            option.formGroup.addControl(option.fieldName, control);
        }
    }
}