import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventAggregratorService} from './event-aggregator.service'
import {from} from 'rxjs';

@NgModule({
    imports:[
        CommonModule
    ],
    providers:[EventAggregratorService]

})
export class EventAggregratorModule {}