import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {PokeSearchService} from '../../utils/services/poke-search.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  pokeNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private searchService: PokeSearchService
  ) { }

  ngOnInit(): void {
    this.pokeNameFormControl.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    )
      .subscribe(data => this.searchService.searchValue$.next(data));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
