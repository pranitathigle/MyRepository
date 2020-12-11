import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioModule } from '../../../../radui-library/src/lib/radio/radio.module';
import { DropdownModule } from '../../../../radui-library/src/lib/dropdown/dropdown.module';
import { AccordionModule } from '../../../../radui-library/src/lib/accordion/accordion.module';
import { HomeComponent } from './home.component';
import { CheckboxModule } from '../../../../radui-library/src/lib/checkbox/checkbox.module';
import { RADUILibraryModule } from '../../../../radui-library/src/lib/radui-library.module';
import { CardModule } from '../../../../radui-library/src/lib/card/card.module';
import { TableModule } from '../../../../radui-library/src/lib/table/table.module';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from '../../../../radui-library/src/lib/carousel/carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RADUILibraryModule,
    RadioModule,
    DropdownModule,
    AccordionModule,
    CheckboxModule,
    CardModule,
    TableModule,
    MatCardModule,
    CarouselModule
  ]
})
export class HomeModule { }
