import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ CardComponent ],
})
export class CardModule {}
