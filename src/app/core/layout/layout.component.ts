import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
export class LayoutComponent {

  pokeNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }
}
