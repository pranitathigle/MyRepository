 import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
// import { SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
 import { SwiperOptions } from 'swiper';
 import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';
 import { FieldComponentBase } from '../form-engine/field-component-base';
 import { FieldConfig } from '../model/field';


// declare var Swiper: any;

 @Component({
  selector: 'radui-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent extends FieldComponentBase implements OnInit {

slideData = [{id: 237, name: '', }, {id: 870, name: '', }, {id: 250, name: '', }, {
    id: 424,
    name: '',
  }, {
    id: 572,
    name: 'Haptic Oklahoma Jewelery',
  }, {
    id: 127,
    name: 'Circles Integration Street',
  }, {
    id: 1009,
    name: 'uniform Communications Tuna',
  }, {
    id: 619,
    name: 'North Carolina',
  }, {
    id: 716,
    name: 'Eyeballs Rubber',
  }, {
    id: 382,
    name: 'Nevada green unleash',
  }
];

// slideData: [{id: 'http://lorempixel.com/400/200', name: ''},
//   {id:'http://lorempixel.com/g/400/200', name: ''},
//   {id:'http://lorempixel.com/400/200/sports', name: ''},
//   {id:'http://lorempixel.com/400/200/sports/1', name: ''},
//   {id:'http://lorempixel.com/400/200/sports/Dummy-Text', name: ''},
//   {id:'http://lorempixel.com/400/200/sports/1/Dummy-Text', name: ''}];

config: SwiperOptions = {
  pagination: { el: '.swiper-pagination', clickable: true },
  autoHeight: true,
  allowTouchMove: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4
    },
    500: {
      slidesPerView: 3
    },
    400: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true
};
  ngOnInit(){}

}
