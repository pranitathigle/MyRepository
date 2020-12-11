import { moduleMetadata } from '@storybook/angular';
import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11Y } from '@storybook/addon-a11y';
import {} from '@storybook/addon-storysource';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextareaComponent } from './../radui-library/src/lib/textarea/textarea.component';

// @ts-ignore


storiesOf('Textarea', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(withA11Y)
  .addDecorator(
    moduleMetadata({
      imports: [ MatFormFieldModule,
        MatInputModule,
        FormsModule, ReactiveFormsModule],
    })
  )
  .add(
    'Default',
    () => ({
      component: TextareaComponent,
      props: {
        field: {
          value: text('value', ''),
          label: text('label', 'Text Label'),
          placeholder: text('placeholder', 'Enter Text Here'),
          fontSize: text('fontSize', '18px'),
          backgroundColor: text('backgroundColor', 'white'),
          borderStyle: text('borderStyle', 'solid'),
          color: text('color', ''),
          width: text('width', '600px'),
          height: text('height', '300px'),
          borderColor: text('borderColor', 'blue')

        },
      }
    }),
   // { notes:  }
  )


  ;
