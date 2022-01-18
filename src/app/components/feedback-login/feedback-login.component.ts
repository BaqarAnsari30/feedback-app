import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ForgetPassDialogComponent } from './dialog/forget-pass-dialog/forget-pass-dialog.component';

@Component({
  selector: 'app-feedback-login',
  templateUrl: './feedback-login.component.html',
  styleUrls: ['./feedback-login.component.css']
})
export class FeedbackLoginComponent implements OnInit {

  hide:boolean = true;

  constructor(
    public dialog: MatDialog,
    public router: Router
    ) { }

  ngOnInit(){
  }

  forgetPass(){
    const dialogRef = this.dialog.open(ForgetPassDialogComponent);
  }

  continue(){
    this.router.navigate(['/', 'main']);
  }

}
