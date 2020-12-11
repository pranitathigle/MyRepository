import { FormControl } from '@angular/forms';

export interface FormValidator {
    name: string;
    action?: string;
    message: string;
    operator?: string;
    value?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: string;
}

export interface FieldConfig {

    label?: string;
    name?: string;
    inputType?: string;
    options?: any[];
    collections?: any;
    type?: string;
    value?: any;
    validations?: FormValidator[];
    eventName?: string;
    validationAction?: string;
    widthClass?: string;
    showField?: boolean;
    message?: any;
    isCustomHtml?: boolean;
    styleType?: string;
    googleAddressValidations?: {
        addressLine1?: FormValidator[];
        city?: FormValidator[];
        state?: FormValidator[];
        zipCode?: FormValidator[];
    };
    buttons?: any;
    readOnly?: boolean;
    dataDl?: any;
    subType?: string;
    children?: FieldConfig[];
    className?: string;
    extraLabel?: string;
    extraText?: string;
    helpText?: string;
    disabled?: boolean;
    placeHolder?: string;
    labelClass?: string;
    inputClass?:string;
    minLength?: number;
    maxLength?: number;
    subTypes?: string;
    checkboxLabel?: string;
    defaultValue?: string;
    behaviors?: any[];
    hasHtml?: boolean;
    decimalPlaces?: number;
    minValue?: number;
    maxValue?: number;
    icon?: string;
    btnClass?: string;
    standarizeAddress?: boolean;
    autocompleteValues?:string[];
    description ?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderColor?: string;
    fontSize?: string;
    fieldtype?:string;
    dynamicHeader?:{};
    color?:string;
    style?:{};
    inputOptionName?: FormControl;
    checkboxOptionName?: FormControl;
    radioOptionName?: FormControl;
    selectOptionName?: FormControl;
    labelEvent?: string;
    isPhone?:boolean;
    isPassword?:boolean;
    isEmail?:boolean;
    reqdClearing?:boolean;
    isPlainText?:boolean;
    isMaterialComponent?:boolean;
}