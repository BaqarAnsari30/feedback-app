import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { FeedbackLoginComponent } from 'src/app/components/feedback-login/feedback-login.component';
import { ForgetPassDialogComponent } from 'src/app/components/feedback-login/dialog/forget-pass-dialog/forget-pass-dialog.component';


@NgModule({
  declarations: [
    FeedbackLoginComponent,
    ForgetPassDialogComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
