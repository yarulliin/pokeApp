import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {CoreRoutingModule} from './core-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class CoreModule { }
