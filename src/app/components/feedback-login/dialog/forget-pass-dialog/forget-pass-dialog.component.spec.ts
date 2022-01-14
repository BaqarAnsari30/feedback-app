import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassDialogComponent } from './forget-pass-dialog.component';

describe('ForgetPassDialogComponent', () => {
  let component: ForgetPassDialogComponent;
  let fixture: ComponentFixture<ForgetPassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
