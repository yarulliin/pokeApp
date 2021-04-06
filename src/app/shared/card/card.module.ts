import { NgModule } from '@angular/core';
import {CardComponent} from '../../shared/card/card.component';
import {BackgroundChangeModule} from '../../utils/directives/background.change.module';
import {LikesModule} from '../../utils/pipes/likes.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [CardComponent],
  imports: [
    BackgroundChangeModule,
    LikesModule,
    CommonModule
  ],
  providers: []
})
export class CardModule { }
