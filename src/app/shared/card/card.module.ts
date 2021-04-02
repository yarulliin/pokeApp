import { NgModule } from '@angular/core';
import {CardComponent} from '../../shared/card/card.component';
import {RatingService} from '../../utils/services/rating.service';
import {BackgroundChangeModule} from '../../utils/directives/background.change.module';

@NgModule({
  declarations: [
    CardComponent,
  ],
  exports: [CardComponent],
  imports: [
    BackgroundChangeModule
  ],
  providers: [RatingService]
})
export class CardModule { }
