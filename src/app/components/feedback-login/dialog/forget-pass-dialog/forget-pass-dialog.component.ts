import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-pass-dialog',
  templateUrl: './forget-pass-dialog.component.html',
  styleUrls: ['./forget-pass-dialog.component.css']
})
export class ForgetPassDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<ForgetPassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  confirmAuthor(){
    this.dialogRef.close(1)
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
