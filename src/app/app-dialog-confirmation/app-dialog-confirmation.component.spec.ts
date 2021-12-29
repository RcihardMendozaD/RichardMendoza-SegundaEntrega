import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogConfirmationComponent } from './app-dialog-confirmation.component';

describe('AppDialogConfirmationComponent', () => {
  let component: AppDialogConfirmationComponent;
  let fixture: ComponentFixture<AppDialogConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDialogConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
