import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEngineComponent } from './form-engine.component';
import { FormEngineDirective } from './form-engine.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[FormEngineComponent, FormEngineDirective],
    exports: [FormEngineComponent, FormEngineDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FormEngineModule { }