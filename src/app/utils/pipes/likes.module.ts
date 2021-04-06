import { NgModule } from '@angular/core';
import {LikesPipe} from './likes.pipe';

@NgModule({
  declarations: [
    LikesPipe
  ],
  exports: [LikesPipe]
})
export class LikesModule { }
