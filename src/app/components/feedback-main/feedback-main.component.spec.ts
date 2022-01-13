import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackMainComponent } from './feedback-main.component';

describe('FeedbackMainComponent', () => {
  let component: FeedbackMainComponent;
  let fixture: ComponentFixture<FeedbackMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
