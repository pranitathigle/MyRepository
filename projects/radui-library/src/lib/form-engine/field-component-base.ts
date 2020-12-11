import {Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../../lib/model/field';

export abstract class FieldComponentBase {

    @Input() group : FormGroup;
    @Input() field: FieldConfig;
    @Input() fieldMap: Map<String, FieldConfig[]>;
    _hasError = false;
    errorMessage: string;

    hasError(): boolean {
        if (this.field && this.field.validations && this.field.validations.length > 0
            && this.group && this.group.controls[this.field.name] && this.group.controls[this.field.name].touched) {
                for (const validation of this.field.validations) {
                    if (this.group && this.group.get(this.field.name).hasError(validation.name)){
                        this._hasError = true;
                        this.errorMessage = validation.message;
                        break;
                    }else{
                        this._hasError = false;
                        this.errorMessage = null;
                    }
                }
        }else{
            this._hasError = false;
            this.errorMessage = null;
        }
        return this._hasError;
    }
}
