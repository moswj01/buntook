import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDataRoutingModule } from './form-data-routing.module';
import { Form1Component } from './component/form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Form1Component
  ],
  imports: [
    CommonModule,
    FormDataRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormDataModule { }
