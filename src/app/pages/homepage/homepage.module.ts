import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {HomepageRoutingModule} from './homepage-routing.module';
import {PokemonListModule} from '../../shared/pokemon-list/pokemon-list.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {RequestInterceptor} from '../../shared/interceptors/request.interceptor';
import {RequestService} from '../../utils/services/request.service';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    PokemonListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    RequestService
  ]
})
export class HomepageModule { }
