import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { LoginComponent } from './login/login.component'


@NgModule({
  declarations: [

  LoginComponent],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }
