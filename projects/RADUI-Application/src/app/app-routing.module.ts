import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcgDemoComponent } from './acg-demo/acg-demo.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { ButtonDisplayComponent } from './button-display/button-display.component';
import { TextareaDisplayComponent } from './textarea-display/textarea-display.component';
import { TextFieldDisplayComponent } from './text-field-display/text-field-display.component';
import { RadioDisplayComponent } from './radio-display/radio-display.component';
import { AccordionDisplayComponent } from './accordion-display/accordion-display.component';
import { CheckboxDisplayComponent } from './checkbox-display/checkbox-display.component';
import { DropdownDisplayComponent } from './dropdown-display/dropdown-display.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'acg',
    component: AcgDemoComponent

  },
  {
    path: 'dynamic',
    component: DynamicComponent

  },
  {
    path: 'form-generator',
    component: FormGeneratorComponent

  },
  {
    path: 'button-display',
    component: ButtonDisplayComponent

  },
  {
    path: 'textarea-display',
    component: TextareaDisplayComponent

  },
  {
    path: 'text-field-display',
    component: TextFieldDisplayComponent

  },
  {
    path: 'radio-display',
    component: RadioDisplayComponent

  },
  {
    path: 'accordion-display',
    component: AccordionDisplayComponent

  },
  {
    path: 'checkbox-display',
    component: CheckboxDisplayComponent

  },
  {
    path: 'dropdown-display',
    component: DropdownDisplayComponent

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
