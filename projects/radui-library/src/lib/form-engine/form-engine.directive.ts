import { Directive, OnChanges, Input, ViewContainerRef, SimpleChanges, ComponentRef,ComponentFactoryResolver, SimpleChange} from '@angular/core';
import { FormEngineDirectiveBase } from './form-engine-directive-base';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';

@Directive({
    selector:'[libFormEngine]'
})

export class FormEngineDirective extends FormEngineDirectiveBase implements OnChanges {
    @Input() field : FieldConfig;
    @Input() group: FormGroup;
    @Input() mapper: any;
    componentRef: ComponentRef<any>;

    constructor(
        public resolver: ComponentFactoryResolver,
        public container: ViewContainerRef
    ){
        super (resolver, container);
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes && changes.mapper && this.mapper){
            this.componentMapper = this.mapper;
            this.renderFields();
        }
    }
}