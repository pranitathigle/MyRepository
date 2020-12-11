import {NgModule,CUSTOM_ELEMENTS_SCHEMA,ModuleWithProviders} from '@angular/core';
import {CommonModule } from '@angular/common';
import {ValidationErrorComponent} from './validation-error/validation-error.component';
import { FormGroupHighlightDirective} from './form-group-highlight.directive';
import {FormUtilitiesService} from './form-utilities.service';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[ValidationErrorComponent,FormGroupHighlightDirective],
    exports:[ValidationErrorComponent,FormGroupHighlightDirective],
    providers: [FormUtilitiesService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FormHelperModule {
    static forRoot():ModuleWithProviders{
        return {
            ngModule:FormHelperModule,
            providers:[
                FormUtilitiesService
            ]
        };
    }
}

export * from './form-utilities.service';
export * from './validation-error/validation-error.component';
export * from './form-group-highlight.directive';