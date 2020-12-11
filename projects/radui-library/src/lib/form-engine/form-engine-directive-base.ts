import { Input, ComponentFactoryResolver, ViewContainerRef, ComponentRef} from '@angular/core';
import { FieldConfig } from '../model/field';
import { FormGroup } from '@angular/forms';

export abstract class FormEngineDirectiveBase {
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
    @Input() componentMapper: any;
    componentRef: ComponentRef<any>;
    constructor(
        public resolver: ComponentFactoryResolver,
        public container: ViewContainerRef
    ){}


    renderFields(){
        console.log('this.field', this.field);
        console.log('this.field.type ', this.field.type);
        console.log('this.componentMapper ', this.componentMapper);
        if (this.field && this.field.type && this.componentMapper){
            const factory = this.resolver.resolveComponentFactory(
                this.componentMapper[this.field.type]
            );
            this.componentRef = this.container.createComponent(factory);
            this.componentRef.instance.field = this.field;
            this.componentRef.instance.group = this.group;
            if (this.field.type === 'messaging') {
                this.componentRef.instance.message = this.field.message;
                this.componentRef.instance.isCustomHtml = this.field.isCustomHtml;
            }
            if ( this.field.type === 'select' && this.field.value){
                this.componentRef.instance.selectedOption = this.field.value;
            }
        }
    }
}
