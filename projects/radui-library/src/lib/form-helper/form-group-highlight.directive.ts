import {Directive, ElementRef,AfterViewInit,Input} from '@angular/core';
import {FieldConfig} from '../model/field';
import {Subscription} from 'rxjs';
import { EventAggregratorService } from '../event-aggregator/event-aggregator.service';

@Directive({
    selector:'[libFormGroupHighlight]'
})

export class FormGroupHighlightDirective implements AfterViewInit {
    @Input() field: FieldConfig;
    private inputEl: HTMLElement;
    private parentEl: HTMLElement;
    private eventEl: HTMLElement;
    subscription: Subscription;

    constructor(
        private eventAggregatorService: EventAggregratorService,
        private el?: ElementRef
    ){}

    ngAfterViewInit(){
        this.parentEl = this.el.nativeElement;
        if(this.parentEl){
            this.inputEl = this.parentEl.querySelector('input, select, textarea, button ') as HTMLElement;
            if(this.inputEl){
                this.inputEl.addEventListener('focus', this.focusGroup.bind(this));
                this.inputEl.addEventListener('blur', this.unfocusGroup.bind(this));
            }
            this.eventEl = this.parentEl.querySelector('label') as HTMLElement;
            if(this.eventEl){
                this.eventEl.addEventListener('click', this.handleEvent.bind(this));
            }
        }
    }

    handleEvent(event){
        if(event && event.target && event.target.tagName.toUpperCase() === 'A'){
            event.preventDefault();
            if(this.field && this.field.labelEvent) {
                this.eventAggregatorService.broadcast(this.field.labelEvent, {event:event,field:this.field});
            }
        }
    }

    getInputValidity(inputEl):boolean {
        switch (inputEl.tagName.toUpperCase()){
            case 'INPUT':
                return ((inputEl as HTMLInputElement).value.length === 0);
            case 'SELECT':
                return ((inputEl as HTMLSelectElement).selectedIndex === -1 || (inputEl as HTMLSelectElement).value !== '');
            case 'TEXTAREA':
                return ((inputEl as HTMLTextAreaElement).value.length === 0);
            case 'BUTTON':
                return true;
            default:
                return false;
        }
    }

    focusGroup(){
        this.parentEl.classList.add('focused');
        if(this.inputEl.dataset.min === 'true' || this.getInputValidity(this.inputEl)) {
            this.parentEl.classList.remove('ng-invalid');
            this.parentEl.classList.remove('has-error');
            this.inputEl.classList.remove('ng-invalid');

            if(this.parentEl.querySelector('lib-validation-error') && !this.parentEl.querySelector('lib-validation-error')
            .classList.contains('hidden')) {
                this.parentEl.querySelector('lib-validation-error').classList.add('hidden');
            }
        }
    }

    unfocusGroup(){
        this.parentEl.classList.remove('focused');
        if(this.parentEl.querySelector('lib-validation-error') && 
        this.parentEl.querySelector('lib-validation-error').classList.contains('hidden')){
            this.parentEl.querySelector('lib-validation-error').classList.remove('hidden');
        }
        if(!this.inputEl.classList.contains('ng-valid')){
            this.parentEl.classList.add('ng-invalid');
            this.parentEl.classList.add('has-error');
            this.inputEl.classList.add('ng-invalid');
        }
    }
}