import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormTestRoutingModule } from './form-test-routing.module';
import { FormComponent } from './form/form.component';
import { CounterInputComponent } from './counter-input/counter-input.component';

@NgModule({
  declarations: [FormComponent, CounterInputComponent],
  imports: [
    CommonModule,
    FormTestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormTestModule { }
