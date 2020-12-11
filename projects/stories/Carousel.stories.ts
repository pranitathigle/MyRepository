import { CarouselComponent } from '../radui-library/src/lib/carousel/carousel.component';
import { MatCardModule } from '@angular/material/card';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { ReactiveFormsModule } from '@angular/forms';
import { boolean, text } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';
import { } from '@storybook/addon-storysource';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
// @ts-ignore
import plainTextFieldMarkdown from './../radui-library/src/lib/text-field/text-field-readme.md';

storiesOf('Carousel', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(withA11Y)
  .addDecorator(
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        NgxUsefulSwiperModule
      ],
    })
  )
  .add('Default', () => ({
    component: CarouselComponent,
    // props: {
    //   configText: {
    //     value: text('value', ''),
    //     label: text('label', 'Label'),
    //     placeholder: text('placeholder', 'Enter Text Here'),
    //     fontSize: text('fontSize', '18px'),
    //     backgroundColor: text('backgroundColor', 'white'),
    //     borderStyle: text('borderStyle', 'none'),
    //     color: text('color', ''),
    //     width: text('width', '600px'),
    //     isPlainText: boolean('isPlainText', true),

    //   },
    // }
  }), {notes: plainTextFieldMarkdown}
  )
  // .add('Clear Text', () => ({
  //   component: TextFieldComponent,
  //   props: {
  //     configText: {
  //       clearTextvalue: text('clearTextvalue', ''),
  //       label: text('label', 'Clearing Input'),
  //       placeholder: text('placeholder', 'Enter Text Here'),
  //       fontSize: text('fontSize', '18px'),
  //       backgroundColor: text('backgroundColor', 'white'),
  //       borderStyle: text('borderStyle', 'none'),
  //       color: text('color', ''),
  //       width: text('width', '600px'),
  //       reqdClearing: boolean('reqdClearing', true),
  //     },
  //   },
  // }), {notes: plainTextFieldMarkdown})
  // .add('Password', () => ({
  //   component: TextFieldComponent,
  //   props: {
  //     configText: {
  //       value: text('value', ''),
  //       label: text('label', 'Password label', 'General'),
  //       fontSize: text('fontSize', '18px'),
  //       backgroundColor: text('backgroundColor', 'white'),
  //       borderStyle: text('borderStyle', 'none'),
  //       color: text('color', ''),
  //       width: text('width', '600px'),
  //       isPassword: boolean('isPassword', true),
  //     },
  //   },
  // }), {notes: plainTextFieldMarkdown})
  // .add('Email', () => ({
  //   component: TextFieldComponent,
  //   props: {
  //     configText: {
  //       value: text('value', ''),
  //       label: text('label', 'Enter Email', 'General'),
  //       placeholder: text('placeholder', 'pat@capgemini.com'),
  //       fontSize: text('fontSize', '18px'),
  //       backgroundColor: text('backgroundColor', 'white'),
  //       borderStyle: text('borderStyle', 'none'),
  //       color: text('color', ''),
  //       width: text('width', '600px'),
  //       isEmail: boolean('isEmail', true),
  //     },
  //   },
  // }), {notes: plainTextFieldMarkdown})
  // .add('Phone', () => ({
  //   component: TextFieldComponent,
  //   props: {
  //     configText: {
  //       value: text('value', ''),
  //       label: text('label', 'Enter Email', 'General'),
  //       placeholder: text('placeholder', '999-999-9999'),
  //       fontSize: text('fontSize', '18px'),
  //       backgroundColor: text('backgroundColor', 'white'),
  //       borderStyle: text('borderStyle', 'none'),
  //       color: text('color', ''),
  //       width: text('width', '600px'),
  //       isPhone: boolean('isPhone', true),
  //     },
  //   },
  // }), {notes: plainTextFieldMarkdown})
  ;
