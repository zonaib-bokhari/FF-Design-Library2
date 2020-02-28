import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';


export function validateCounterRange(c: FormControl) {
  const err = {
    rangeError: {
      given: c.value,
      max: 10,
      min: 0
    }
  };

  return (c.value > 10 || c.value < 0) ? err : null;
}


@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: validateCounterRange,
      multi: true
    }
  ]
})
export class CounterInputComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  @Input()  _counterValue = 0;

  ngOnInit() {
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increment() {
    this.counterValue++;
    //this._counterValue ++;
    //this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    //this._counterValue--;
    //this.propagateChange(this.counterValue);
  }

}
