import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogFailComponent } from './app-dialog-fail.component';

describe('AppDialogFailComponent', () => {
  let component: AppDialogFailComponent;
  let fixture: ComponentFixture<AppDialogFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDialogFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
