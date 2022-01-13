import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackData } from 'src/app/data/feedback-data';
import { Feedback } from 'src/app/models/feedback';
import { AddReviewDialogComponent } from './dialog/add-review-dialog/add-review-dialog.component';
import { DeleteDialogComponent } from './dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-feedback-main',
  templateUrl: './feedback-main.component.html',
  styleUrls: ['./feedback-main.component.css']
})
export class FeedbackMainComponent implements OnInit {

  feedback: Feedback = new Feedback({});
  feedbackList: Feedback[] = [];
  average: number = 0;
  feedbackForm: FormGroup;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.feedbackList = FeedbackData;
    this.calculateAvg();
  }

  handleTextChange(text: string) {
    this.feedback.text = text;
  }

  //DELETE
  handleDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.feedbackList = this.feedbackList.filter(x => x.id !== id);
        this.calculateAvg();
      }
    })
  }

  calculateAvg() {
    if (this.feedbackList.length === 0) {
      this.average = 0;
    }
    else {
      this.average = this.feedbackList.reduce((acc, cur) => {
        return acc + cur.rating
      }, 0) / this.feedbackList.length;
    }
  }

  //Add
  addReview() {
    const dialogRef = this.dialog.open(AddReviewDialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.feedback.id = this.feedbackList[this.feedbackList.length - 1].id + 1;
        this.feedback.rating = this.average;
        this.feedbackList.push(this.feedback);
        this.feedback = new Feedback({});
        this.calculateAvg();
      }
    })
  }

}
