import { NgModule } from '@angular/core';
import {CardComponent} from '../../shared/card/card.component';
import {BackgroundChangeModule} from '../../utils/directives/background.change.module';
import {LikesModule} from '../../utils/pipes/likes.module';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [CardComponent],
  imports: [
    BackgroundChangeModule,
    LikesModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: []
})
export class CardModule { }
