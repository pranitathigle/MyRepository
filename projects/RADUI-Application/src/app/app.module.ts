// import { CardComponent } from './../../../radui-library/src/lib/card/card.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CheckboxModule} from 'projects/radui-library/src/lib/checkbox/checkbox.module';
import { AcgDemoComponent } from './acg-demo/acg-demo.component';
import { HomeComponent } from './home/home.component';
import { AcgDemoModule } from './acg-demo/acg-demo.module';
import { HomeModule } from './home/home.module';
import { RADUILibraryModule } from './../../../radui-library/src/lib/radui-library.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { ButtonDisplayComponent } from './button-display/button-display.component';
import { ButtonDisplayModule } from './button-display/button-display.module';
import { TextFieldDisplayComponent } from './text-field-display/text-field-display.component';
import { TextareaDisplayComponent } from './textarea-display/textarea-display.component';
import { AccordionDisplayComponent } from './accordion-display/accordion-display.component';
import { DropdownDisplayComponent } from './dropdown-display/dropdown-display.component';
import { RadioDisplayComponent } from './radio-display/radio-display.component';
import { CheckboxDisplayComponent } from './checkbox-display/checkbox-display.component';
import { DropDownDisplayModule } from './dropdown-display/dropdown-display.module';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldDisplayComponent,
    TextareaDisplayComponent,
    AccordionDisplayComponent,
    RadioDisplayComponent,
    CheckboxDisplayComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AcgDemoModule,
    DynamicModule,
    RADUILibraryModule,
    FormGeneratorModule,
    // MatFormFieldModule,
    // MatInputModule,
    // FormsModule, ReactiveFormsModule,
    ButtonDisplayModule,
    DropDownDisplayModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
