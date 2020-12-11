import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule
  ],
  exports: [ CarouselComponent],

})
export class CarouselModule { }
