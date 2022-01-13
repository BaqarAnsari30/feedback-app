import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { SidenavComponent } from 'src/app/components/shared/sidenav/sidenav.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { FeedbackMainComponent } from 'src/app/components/feedback-main/feedback-main.component';
import { DeleteDialogComponent } from 'src/app/components/feedback-main/dialog/delete-dialog/delete-dialog.component';
import { AddReviewDialogComponent } from 'src/app/components/feedback-main/dialog/add-review-dialog/add-review-dialog.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    FeedbackMainComponent,
    DeleteDialogComponent,
    AddReviewDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ]
})
export class MainModule { }
