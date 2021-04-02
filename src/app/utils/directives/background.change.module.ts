import { NgModule } from '@angular/core';
import {BackgroundChangeDirective} from './background.change.directive';

@NgModule({
  declarations: [
    BackgroundChangeDirective
  ],
  exports: [BackgroundChangeDirective]
})
export class BackgroundChangeModule { }
